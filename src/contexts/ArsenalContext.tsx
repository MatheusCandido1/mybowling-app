import { createContext, useCallback, useEffect, useState } from "react";
import { useBalls } from "../hooks/useBalls";
import { IBall } from "../entities/Ball";

interface ArsenalContextData {
  showNewBallModal: boolean;
  handleShowNewBallModal(): void;
  handleCloseNewBallModal(): void;
  balls: IBall[];
  isFetching: boolean;
  selectedBall: IBall | null;
  showEditBallModal: boolean;
  handleShowEditBallModal(ball: IBall): void;
  handleCloseEditBallModal(): void;
}

export const ArsenalContext = createContext({} as ArsenalContextData);

export function ArsenalProvider({children}: {children: React.ReactNode}) {
  const [showNewBallModal, setShotNewBallModal] = useState(false);
  const [showEditBallModal, setShowEditBallModal] = useState(false);
  const [selectedBall, setSelectedBall] = useState<IBall | null>(null);

  const { balls, isFetching } = useBalls();

  function handleShowNewBallModal() {
    setShotNewBallModal(true);
  }

  function handleCloseNewBallModal() {
    setShotNewBallModal(false);
  }

  function handleShowEditBallModal(ball: IBall) {
    setSelectedBall(ball);
    setShowEditBallModal(true);
  }

  function handleCloseEditBallModal() {
    setSelectedBall(null);
    setShowEditBallModal(false);
  }

  return (
    <ArsenalContext.Provider
      value={{
        showNewBallModal,
        handleShowNewBallModal,
        handleCloseNewBallModal,
        balls,
        isFetching,
        selectedBall,
        showEditBallModal,
        handleShowEditBallModal,
        handleCloseEditBallModal
      }}
    >
      {children}
    </ArsenalContext.Provider>
  )

}
