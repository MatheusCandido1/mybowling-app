import { createContext, useState } from "react";

interface RankingContextData {
  showGameDetails: boolean;
  handleShowGameDetails(game: any): void;
  handleHideGameDetails(): void;
  selectedGame: any;
}

export const RankingContext = createContext({} as RankingContextData);

export function RankingProvider({children}: {children: React.ReactNode}) {
  const [showGameDetails, setShowGameDetails] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  function handleShowGameDetails(game: any) {
    setSelectedGame(game);
    setShowGameDetails(true);
  }

  function handleHideGameDetails() {
    setSelectedGame(null);
    setShowGameDetails(false);
  }

  return (
    <RankingContext.Provider value={{
      showGameDetails,
      handleShowGameDetails,
      handleHideGameDetails,
      selectedGame
    }}>
      {children}
    </RankingContext.Provider>
  )
}

