import { useEffect, useState } from "react";
import { useGroups } from "../../hooks/useGroups";
import { useGroupGetAll } from "../../hooks/useGroupGetAll";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useGroup } from "../../hooks/useGroup";
import { IGroup } from "../../entities/Group";

export function useGroupsController() {
  const { groups, invites, isFetching } = useGroupGetAll();

  const navigation = useNavigation();


  const queryClient = useQueryClient();

  const {
    showNewGroupModal,
    handleShowNewGroupModal,
    selectedGroup,
    selectedMenu,
    showInviteModal,
    handleShowInviteModal
  } = useGroups();

  function handleGroupPress(group: IGroup) {
    navigation.navigate(
      'InternalStack', {
        screen: 'group',
        params: { group: group}
      }
    );
  }

  async function refreshGroups() {
    const oldData = queryClient.getQueryData(['groups', 'getAll']);

    await queryClient.invalidateQueries({ queryKey: ['groups'] });

    const newData = queryClient.getQueryData(['groups', 'getAll']);

   if(oldData !== newData) {
    Toast.show({
      type: 'info',
      text1: 'You have a new invite! Click here to check it out!',
      visibilityTime: 5000,
      autoHide: true,
      onPress: () => {
        handleShowInviteModal()
      }
    });
   }
  }


  return {
    showNewGroupModal,
    handleShowNewGroupModal,
    invites,
    groups,
    isFetchingGroups: isFetching,
    handleGroupPress,
    selectedGroup,
    selectedMenu,
    showInviteModal,
    refreshGroups,
    handleShowInviteModal
  }
}
