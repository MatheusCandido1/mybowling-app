import { useState } from "react";
import { useGroups } from "../../hooks/useGroups";
import { useGroup } from "../../hooks/useGroup";
import { useNavigation } from "@react-navigation/native";

export function useGroupsController() {
  const { groups, isFetching } = useGroup();

  const navigation = useNavigation();

  const { showNewGroupModal, handleShowNewGroupModal, selectedGroup, selectedMenu  } = useGroups();

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
    groups,
    isFetchingGroups: isFetching,
    handleSelectGroup,
    selectedGroup,
    selectedMenu
  }
}
