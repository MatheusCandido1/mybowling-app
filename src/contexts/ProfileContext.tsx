import { createContext, useCallback, useEffect, useState } from "react";

interface ProfileContextData {
  showUpdateProfileModal: boolean;
  handleCloseUpdateProfileModal(): void;
  handleShowUpdateProfileModal(): void;
  showUpdatePasswordModal: boolean;
  handleCloseUpdatePasswordModal(): void;
  handleShowUpdatePasswordModal(): void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({children}: {children: React.ReactNode}) {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  function handleShowUpdateProfileModal() {
    setShowUpdateProfileModal(true);
  }

  function handleCloseUpdateProfileModal() {
    setShowUpdateProfileModal(false);
  }

  function handleShowUpdatePasswordModal() {
    setShowUpdatePasswordModal(true);
  }

  function handleCloseUpdatePasswordModal() {
    setShowUpdatePasswordModal(false);
  }

  return (
    <ProfileContext.Provider value={{
      showUpdateProfileModal,
      handleCloseUpdateProfileModal,
      handleShowUpdateProfileModal,
      showUpdatePasswordModal,
      handleCloseUpdatePasswordModal,
      handleShowUpdatePasswordModal
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

