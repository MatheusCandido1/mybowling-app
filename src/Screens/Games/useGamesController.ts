import { useState } from "react";
import { useGamesGetAll } from "../../hooks/useGamesGetAll";
import { GamesFilters } from "../../services/gamesService/getAll";
import { IBall } from "../../entities/Ball";
import { ILocation } from "../../entities/Location";
import { IGame } from "../../entities/Game";
import { useGames } from "../../hooks/useGames";

export function useGamesController() {

  const today = new Date();

  const {
    filters,
    showFiltersModal,
    handleCloseFiltersModal,
    handleShowFiltersModal,
    games,
    isFetchingGames
   } = useGames();

  const [selectedGame, setSelectedGame] = useState<IGame | null>(null);


  const [showDetailsModal, setShowDetailsModal] = useState(false);

  function handleShowDetailsModal(game: IGame) {
    setSelectedGame(game)
    setShowDetailsModal(true);
  }

  function handleCloseDetailsModal() {
    setSelectedGame(null)
    setShowDetailsModal(false);
  }

  return {
    games,
    isLoading: isFetchingGames,
    showFiltersModal,
    handleShowFiltersModal,
    handleCloseFiltersModal,
    showDetailsModal,
    handleShowDetailsModal,
    handleCloseDetailsModal,
    filters,
    selectedGame
  }
}
