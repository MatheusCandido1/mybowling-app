import { createContext, useCallback, useEffect, useState } from "react";

interface ProfileContextData {
  showUpdateProfileModal: boolean;
  handleCloseUpdateProfileModal(): void;
  handleShowUpdateProfileModal(): void;
  showUpdatePasswordModal: boolean;
  handleCloseUpdatePasswordModal(): void;
  handleShowUpdatePasswordModal(): void;
  showDeleteAccountModal: boolean;
  handleShowDeleteAccountModal(): void;
  handleCloseDeleteAccountModal(): void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({children}: {children: React.ReactNode}) {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  function handleShowDeleteAccountModal() {
    setShowDeleteAccountModal(true);
  }

  function handleCloseDeleteAccountModal() {
    setShowDeleteAccountModal(false);
  }

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
      handleShowUpdatePasswordModal,
      showDeleteAccountModal,
      handleShowDeleteAccountModal,
      handleCloseDeleteAccountModal
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

