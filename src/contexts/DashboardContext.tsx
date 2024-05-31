import { createContext, useCallback, useEffect, useState } from "react";

interface DashboardContextData {
  showAverageModal: boolean;
  handleCloseAverageModal(): void;
  handleShowAverageModal(): void;
  showSplitModal: boolean;
  handleShowSplitModal(): void;
  handleCloseSplitModal(): void;
  showNewVersionPopup: boolean;
  handleCloseNewVersionPopup(): void;
  handleShowNewVersionPopup(): void;
  showAdditionalInformationModal: boolean;
  handleShowAdditionalInformationModal(): void;
  handleCloseAdditionalInformationModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({children}: {children: React.ReactNode}) {
  const [showAverageModal, setShowAverageModal] = useState(false);
  const [showSplitModal, setShowSplitModal] = useState(false);
  const [showNewVersionPopup, setShowNewVersionPopup] = useState(false);
  const [showAdditionalInformationModal, setShowAdditionalInformationModal] = useState(false);

  function handleShowAdditionalInformationModal() {
    setShowAdditionalInformationModal(true);
  }

  function handleCloseAdditionalInformationModal() {
    setShowAdditionalInformationModal(false);
  }

  function handleCloseNewVersionPopup() {
    setShowNewVersionPopup(false);
  }

  function handleShowNewVersionPopup() {
    setShowNewVersionPopup(true);
  }

  function handleShowSplitModal() {
    setShowSplitModal(true);
  }

  function handleCloseSplitModal() {
    setShowSplitModal(false);
  }

  function handleShowAverageModal() {
    setShowAverageModal(true);
  }

  function handleCloseAverageModal() {
    setShowAverageModal(false);
  }

  return (
    <DashboardContext.Provider value={{
      showAverageModal,
      handleCloseAverageModal,
      handleShowAverageModal,
      showSplitModal,
      handleShowSplitModal,
      handleCloseSplitModal,
      showNewVersionPopup,
      handleCloseNewVersionPopup,
      handleShowNewVersionPopup,
      showAdditionalInformationModal,
      handleShowAdditionalInformationModal,
      handleCloseAdditionalInformationModal
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

