import { createContext, useCallback, useEffect, useState } from "react";
import { GamesFilters } from "../services/gamesService/getAll";
import { IBall } from "../entities/Ball";
import { ILocation } from "../entities/Location";
import { useGamesGetAll } from "../hooks/useGamesGetAll";

interface GamesContextData {
  filters: GamesFilters;
  handleApplyFilters: (currentFilters: GamesFilters) => void;
  showFiltersModal: boolean;
  handleShowFiltersModal: () => void;
  handleCloseFiltersModal: () => void;
  games: any[];
  isFetchingGames: boolean;
  handleResetFilters: () => void;
  refetchGames: () => void;
}

export const GamesContext = createContext({} as GamesContextData);

export function GamesProvider({children}: {children: React.ReactNode}) {

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  function handleShowFiltersModal() {
    setShowFiltersModal(true);
  }

  function handleCloseFiltersModal() {
    setShowFiltersModal(false);
  }

  const today = new Date();

  const [filters, setFilters] = useState<GamesFilters>({
    start_date: new Date(today.getFullYear(), today.getMonth(), 1),
    end_date: new Date(today.getFullYear(), today.getMonth() + 1, 0),
    ball: null,
    location: null
  });


  const { games, isFetchingGames, refetchGames } = useGamesGetAll(filters);

  useEffect(() => {
    refetchGames();
  }, [filters, refetchGames]);



  function handleApplyFilters(currentFilters: GamesFilters) {
    setFilters(currentFilters);
    handleCloseFiltersModal();
  }


  function handleResetFilters() {
    setFilters({
      start_date: new Date(today.getFullYear(), today.getMonth(), 1),
      end_date: new Date(today.getFullYear(), today.getMonth() + 1, 0),
      location: null,
      ball: null
    });
    handleCloseFiltersModal();
  }


  return (
    <GamesContext.Provider
      value={{
        filters,
        handleApplyFilters,
        showFiltersModal,
        handleShowFiltersModal,
        handleCloseFiltersModal,
        games,
        isFetchingGames,
        handleResetFilters,
        refetchGames
      }}
    >
      {children}
    </GamesContext.Provider>
  )

}
