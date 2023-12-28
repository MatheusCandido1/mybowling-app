import { useState } from "react";
import { useGamesByGroup } from "../../../hooks/useGamesByGroup";
import { useGroups } from "../../../hooks/useGroups";
import { IGame } from "../../../entities/Game";

export function useGamesByGroupController() {

  const [page, setPage] = useState(1);

  const { selectedGroup } = useGroups();

  const { games, isFetching } = useGamesByGroup(selectedGroup.id, page);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [selectedGame, setSelectedGame] = useState<IGame | null>(null);


  async function handleSetPage() {
    setPage((prevPage) => prevPage + 1);
  }

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
    games,
    isFetching,
    showDetailsModal,
    showFilterModal,
    handleShowDetailsModal,
    handleCloseDetailsModal,
    handleShowFilterModal,
    handleCloseFilterModal,
    selectedGame,
    handleSetPage
  }
}
