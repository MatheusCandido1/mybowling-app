
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useGroup } from "../../hooks/useGroup";

export function useGroupController() {
  const { selectedGroup, showEditGroupModal, handleShowEditGroupModal, handleShowFilterGamesModal, groupDetail, isFetchingDetails, isLoggedUserAdmin } = useGroup();

  const [showInviteMemberPopup, setShowInviteMemberPopup] = useState(false);


  function handleShowInviteMemberPopup() {
    setShowInviteMemberPopup(true);
  }

  function handleCloseInviteMemberPopup() {
    setShowInviteMemberPopup(false);
  }

  const [selectedMenu, setSelectedMenu] = useState<'Games' | 'Members'  | 'Standings'>('Standings');

  function handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings') {
    setSelectedMenu(menu);
  }

  return {
    handleSelectMenu,
    selectedMenu,
    isFetching: isFetchingDetails,
    groupDetail,
    isLoggedUserAdmin,
    showInviteMemberPopup,
    handleShowInviteMemberPopup,
    handleCloseInviteMemberPopup,
    selectedGroup,
    showEditGroupModal,
    handleShowEditGroupModal,
    handleShowFilterGamesModal
  }
}
