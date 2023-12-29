import { useGroups } from "../../hooks/useGroups";
import { useGroupShow } from "../../hooks/useGroupShow";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export function useGroupController(id: number) {
  const { loggedUser } = useAuth();

  const [selectedMenu, setSelectedMenu] = useState<'Games' | 'Members'  | 'Standings'>('Standings');

  function handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings') {
    setSelectedMenu(menu);
  }

  const { groupDetail, isFetching } = useGroupShow(id);

  const isLoggedUserAdmin = loggedUser?.id === groupDetail?.user_id;

  return {
    handleSelectMenu,
    selectedMenu,
    isFetching,
    groupDetail,
    isLoggedUserAdmin
  }
}
