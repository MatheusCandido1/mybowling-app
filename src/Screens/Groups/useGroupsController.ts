import { useState } from "react";
import { useGroups } from "../../hooks/useGroups";
import { useGroup } from "../../hooks/useGroupGetAll";
import { useNavigation } from "@react-navigation/native";

export function useGroupsController() {
  const { groups, invites, isFetching } = useGroup();

  const navigation = useNavigation();

  const {
    showNewGroupModal,
    handleShowNewGroupModal,
    selectedGroup,
    selectedMenu,
    showInviteModal
  } = useGroups();

  function handleSelectGroup(group: any) {
    navigation.navigate(
      'GroupStack', {
        screen: 'group',
        params: { id: group.id}
      }
    );

  }


  return {
    showNewGroupModal,
    handleShowNewGroupModal,
    invites,
    groups,
    isFetchingGroups: isFetching,
    handleSelectGroup,
    selectedGroup,
    selectedMenu,
    showInviteModal
  }
}
