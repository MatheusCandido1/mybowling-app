import { useGroups } from "../../hooks/useGroups";
import { useGroupShow } from "../../hooks/useGroupShow";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useGroup } from "../../hooks/useGroup";

export function useGroupController(id: number) {
  const { loggedUser } = useAuth();
  const { handleSelectGroupId, selectedGroupId } = useGroup();

  const [showInviteMemberPopup, setShowInviteMemberPopup] = useState(false);
  const { groupDetail, isFetching } = useGroupShow(id);

  useEffect(() => {
    handleSelectGroupId(id);
  }, [id]);

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


  const isLoggedUserAdmin = loggedUser?.id === groupDetail?.user_id;

  return {
    handleSelectMenu,
    selectedMenu,
    isFetching,
    groupDetail,
    isLoggedUserAdmin,
    showInviteMemberPopup,
    handleShowInviteMemberPopup,
    handleCloseInviteMemberPopup,
    selectedGroupId
  }
}
