import { createContext, useCallback, useEffect, useState } from "react";
import { IGroup } from "../entities/Group";
import { GamesByGroupFilters } from "../services/groupsService/games";
import { useGamesByGroup } from "../hooks/useGamesByGroup";
import { useGroupShow } from "../hooks/useGroupShow";
import { useAuth } from "../hooks/useAuth";

interface GroupContextData {
  showMemberDetailsModal: boolean;
  handleCloseMemberDetailsModal(): void;
  handleSelectMember(member: any): void;
  selectedMember: any;
  showConfirmRemovePopup: boolean;
  handleCloseConfirmDeletePopup(): void;
  handleShowConfirmDeletePopup(): void;
  selectedGroup: IGroup | null;
  handleSelectGroup(group: IGroup): void;
  showEditGroupModal: boolean;
  handleShowEditGroupModal(): void;
  handleCloseEditGroupModal(): void;
  filters: GamesByGroupFilters;
  setFilters(filters: GamesByGroupFilters): void;
  showFilterGamesModal: boolean;
  handleShowFilterGamesModal(): void;
  handleCloseFilterGamesModal(): void;
  gamesByGroup: any[];
  isFetchingGames: boolean;
  isFetchingDetails: boolean;
  groupDetail: any;
  handleApplyFilters(currentFilters: GamesByGroupFilters): void;
  handleResetFilters(): void;
  standings: any[];
  members: any[];
  isLoggedUserAdmin: boolean;
}

export const GroupContext = createContext({} as GroupContextData);

export function GroupProvider({children, group}: {children: React.ReactNode, group: any}) {
  const { loggedUser } = useAuth();


  const [showMemberDetailsModal, setShowMemberDetailsModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const [showConfirmRemovePopup, setShowConfirmRemovePopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(group.group);

  const [showEditGroupModal, setShowEditGroupModal] = useState(false);

  const [showFilterGamesModal, setShowFilterGamesModal] = useState(false);


  function handleCloseFilterGamesModal() {
    setShowFilterGamesModal(false);
  }

  function handleShowFilterGamesModal() {
    setShowFilterGamesModal(true);
  }

  const today = new Date();

  const [filters, setFilters] = useState<GamesByGroupFilters>({
    start_date: new Date(today.getFullYear(), today.getMonth(), 1),
    end_date: new Date(today.getFullYear(), today.getMonth() + 1, 0),
    user: null,
    location: null
  });


  const { gamesByGroup, isFetchingGames, refetch } = useGamesByGroup(selectedGroup?.id, filters);

  const { groupDetail, isFetchingDetails } = useGroupShow(selectedGroup?.id);

  const standings = groupDetail?.standings;

  const members = groupDetail?.members;

  const isLoggedUserAdmin = loggedUser?.id === selectedGroup?.owner?.id

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  function handleApplyFilters(currentFilters: GamesByGroupFilters) {
    setFilters(currentFilters);
    handleCloseFilterGamesModal();
  }

  function handleResetFilters() {
    setFilters({
      start_date: new Date(today.getFullYear(), today.getMonth(), 1),
      end_date: new Date(today.getFullYear(), today.getMonth() + 1, 0),
      location: null,
      user: null
    });
    handleCloseFilterGamesModal();
  }

  function handleCloseEditGroupModal() {
    setShowEditGroupModal(false);
  }

  function handleShowEditGroupModal() {
    setShowEditGroupModal(true);
  }

  function handleSelectGroup(group: IGroup) {
    //setSelectedGroup(group);
  }

  function handleCloseConfirmDeletePopup() {
    setShowConfirmRemovePopup(false);
  }

  function handleShowConfirmDeletePopup() {
    setShowConfirmRemovePopup(true);
  }

  function handleSelectMember(member: any) {
    setSelectedMember(member);
    handleShowMemberDetailsModal();
  }

  function handleShowMemberDetailsModal() {
    setShowMemberDetailsModal(true);
  }

  function handleCloseMemberDetailsModal() {
    setShowMemberDetailsModal(false);
  }

  return (
    <GroupContext.Provider value={{
      showMemberDetailsModal,
      handleSelectMember,
      handleCloseMemberDetailsModal,
      selectedMember,
      showConfirmRemovePopup,
      handleCloseConfirmDeletePopup,
      handleShowConfirmDeletePopup,
      selectedGroup,
      handleSelectGroup,
      showEditGroupModal,
      handleShowEditGroupModal,
      handleCloseEditGroupModal,
      filters,
      setFilters,
      showFilterGamesModal,
      handleShowFilterGamesModal,
      handleCloseFilterGamesModal,
      gamesByGroup,
      isFetchingGames,
      isFetchingDetails,
      handleApplyFilters,
      handleResetFilters,
      groupDetail,
      standings,
      members,
      isLoggedUserAdmin
    }}>
      {children}
    </GroupContext.Provider>
  )
}

