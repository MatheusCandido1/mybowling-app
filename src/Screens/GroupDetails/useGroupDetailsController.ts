import { useState } from "react";
import { useGroups } from "../../hooks/useGroups";
import { useGroupDetails } from "../../hooks/useGroupDetails";
import { useAuth } from "../../hooks/useAuth";

export function useGroupDetailsController() {
  const { loggedUser } = useAuth();

  const { selectedMenu, handleSelectMenu, selectedGroup } = useGroups();

  const { groupDetail, isFetching } = useGroupDetails(selectedGroup.id);

  let isLoggedUserAdmin = false;

  if(!isFetching) {
    isLoggedUserAdmin = groupDetail.group.owner_id === loggedUser!.id;
  }

  return {
    handleSelectMenu,
    selectedMenu,
    groupDetail,
    isLoggedUserAdmin,
    isFetching
  }
}
