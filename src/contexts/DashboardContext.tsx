import { createContext, useCallback, useEffect, useState } from "react";

interface DashboardContextData {
  showAverageModal: boolean;
  handleCloseAverageModal(): void;
  handleShowAverageModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({children}: {children: React.ReactNode}) {
  const [showAverageModal, setShowAverageModal] = useState(false);

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
      handleShowAverageModal
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

