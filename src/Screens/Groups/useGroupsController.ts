import { useState } from "react";
import { useGroups } from "../../hooks/useGroups";
import { useGroup } from "../../hooks/useGroup";

export function useGroupsController() {
  const { groups, isFetching } = useGroup();

  const { showNewGroupModal, handleShowNewGroupModal, handleSelectGroup, selectedGroup, selectedMenu  } = useGroups();


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
