import { useState } from "react";
import { useGames } from "../../hooks/useGames";
import { GamesFilters } from "../../services/gamesService/getAll";
import { IBall } from "../../entities/Ball";
import { ILocation } from "../../entities/Location";

export function useGamesController() {

  const today = new Date();

  const [filters, setFilters] = useState<GamesFilters>({
    start_date: new Date(today.getFullYear(), today.getMonth(), 1),
    end_date: new Date(today.getFullYear(), today.getMonth() + 1, 0),
    ball: null,
    location: null
  })

  const { games, isFetching } = useGames(filters);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  function handleShowDetailsModal() {
    setShowDetailsModal(true);
  }

  function handleCloseDetailsModal() {
    setShowDetailsModal(false);
  }

  function handleShowFilterModal() {
    setShowFilterModal(true);
  }

  function handleCloseFilterModal() {
    setShowFilterModal(false);
  }



  return {
    games,
    isLoading: isFetching,
    showDetailsModal,
    showFilterModal,
    handleShowDetailsModal,
    handleCloseDetailsModal,
    handleShowFilterModal,
    handleCloseFilterModal,
    filters
  }
}
