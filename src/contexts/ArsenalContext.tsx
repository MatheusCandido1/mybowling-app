import { createContext, useCallback, useEffect, useState } from "react";

interface ArsenalContextData {
  showNewBallModal: boolean;
  handleShowNewBallModal(): void;
  handleCloseNewBallModal(): void;
}

export const ArsenalContext = createContext({} as ArsenalContextData);

export function ArsenalProvider({children}: {children: React.ReactNode}) {
  const [showNewBallModal, setShotNewBallModal] = useState(false);

  function handleShowNewBallModal() {
    setShotNewBallModal(true);
  }

  function handleCloseNewBallModal() {
    setShotNewBallModal(false);
  }

  return (
    <ArsenalContext.Provider
      value={{
        showNewBallModal,
        handleShowNewBallModal,
        handleCloseNewBallModal
      }}
    >
      {children}
    </ArsenalContext.Provider>
  )

}
