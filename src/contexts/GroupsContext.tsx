import { useNavigation } from "@react-navigation/native";
import { createContext, useCallback, useEffect, useState } from "react";

interface GroupsContextData {
  showNewGroupModal: boolean;
  handleShowNewGroupModal(): void;
  handleCloseNewGroupModal(): void;
  handleSelectGroup(group: any): void;
  selectedGroup: any;
  selectedMenu: 'Games' | 'Members'  | 'Standings';
  handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings'): void;
  showInviteModal: boolean;
  handleShowInviteModal(): void;
  handleCloseInviteModal(): void;
  handleSelectMember(member: any): void;
  selectedMember: any;
  showMemberDetailsModal: boolean;
  handleCloseMemberDetailsModal(): void;
  handleShowMemberDetailsModal(): void;
}

export const GroupsContext = createContext({} as GroupsContextData);

export function GroupsProvider({children}: {children: React.ReactNode}) {
  const [showNewGroupModal, setShowNewGroupModal] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [showMemberDetailsModal, setShowMemberDetailsModal] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState<'Games' | 'Members'  | 'Standings'>('Standings');

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

  function handleShowNewGroupModal() {
    setShowNewGroupModal(true);
  }

  function handleCloseNewGroupModal() {
    setShowNewGroupModal(false);
  }

  function handleSelectGroup(group: any) {
    setSelectedGroup(group);
  }

  function handleSelectMenu(menu: 'Games' | 'Members'  | 'Standings') {
    setSelectedMenu(menu);
  }

  function handleShowInviteModal() {
    setShowInviteModal(true);
  }

  function handleCloseInviteModal() {
    setShowInviteModal(false);
  }

  return (
    <GroupsContext.Provider value={{
      showNewGroupModal,
      handleShowNewGroupModal,
      handleCloseNewGroupModal,
      handleSelectGroup,
      selectedGroup,
      selectedMenu,
      handleSelectMenu,
      showInviteModal,
      handleShowInviteModal,
      handleCloseInviteModal,
      handleSelectMember,
      selectedMember,
      handleCloseMemberDetailsModal,
      handleShowMemberDetailsModal,
      showMemberDetailsModal
    }}>
      {children}
    </GroupsContext.Provider>
  )
}

