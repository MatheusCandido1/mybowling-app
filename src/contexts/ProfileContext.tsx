import { createContext, useCallback, useEffect, useState } from "react";

interface ProfileContextData {
  showUpdateProfileModal: boolean;
  handleCloseUpdateProfileModal(): void;
  handleShowUpdateProfileModal(): void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({children}: {children: React.ReactNode}) {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  function handleShowUpdateProfileModal() {
    setShowUpdateProfileModal(true);
  }

  function handleCloseUpdateProfileModal() {
    setShowUpdateProfileModal(false);
  }

  return (
    <ProfileContext.Provider value={{
      showUpdateProfileModal,
      handleCloseUpdateProfileModal,
      handleShowUpdateProfileModal
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

