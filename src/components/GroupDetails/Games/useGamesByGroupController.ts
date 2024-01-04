import { useState } from "react";
import { useGamesByGroup } from "../../../hooks/useGamesByGroup";
import { useGroups } from "../../../hooks/useGroups";
import { IGame } from "../../../entities/Game";
import { useGroup } from "../../../hooks/useGroup";
import { GamesByGroupFilters } from "../../../services/groupsService/games";

export function useGamesByGroupController() {

  const { filters, setFilters, handleShowFilterGamesModal, gamesByGroup, isFetchingGames } = useGroup();

  function handleApplyFilters(currentFilters: GamesByGroupFilters) {
    setFilters(currentFilters);
  }

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [selectedGame, setSelectedGame] = useState<IGame | null>(null);

  function handleShowDetailsModal(game: IGame) {
    setSelectedGame(game)
    setShowDetailsModal(true);
  }

  function handleCloseDetailsModal() {
    setSelectedGame(null)
    setShowDetailsModal(false);
  }

  function handleShowFilterModal() {
    setShowFilterModal(true);
  }

  function handleCloseFilterModal() {
    setShowFilterModal(false);
  }


  return {
    games: gamesByGroup,
    isFetching: isFetchingGames,
    showDetailsModal,
    showFilterModal,
    handleShowDetailsModal,
    handleCloseDetailsModal,
    handleShowFilterModal,
    handleCloseFilterModal,
    selectedGame,
    filters,
    handleApplyFilters,
    handleShowFilterGamesModal

  }
}
