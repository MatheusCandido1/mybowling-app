import { createContext, useCallback, useEffect, useState } from "react";

interface GroupContextData {
  showMemberDetailsModal: boolean;
  handleCloseMemberDetailsModal(): void;
  handleSelectMember(member: any): void;
  selectedMember: any;
  showConfirmRemovePopup: boolean;
  handleCloseConfirmDeletePopup(): void;
  handleShowConfirmDeletePopup(): void;
}

export const GroupContext = createContext({} as GroupContextData);

export function GroupProvider({children}: {children: React.ReactNode}) {
  const [showMemberDetailsModal, setShowMemberDetailsModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const [showConfirmRemovePopup, setShowConfirmRemovePopup] = useState(false);

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
      handleShowConfirmDeletePopup
    }}>
      {children}
    </GroupContext.Provider>
  )
}

