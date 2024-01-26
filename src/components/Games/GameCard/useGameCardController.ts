import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { GamesService } from "../../../services/gamesService";
import Toast from "react-native-toast-message";
import { useGames } from "../../../hooks/useGames";

export function useGameCardController() {

  const { handleShowEditModal } = useGames();

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const swipeableRef = useRef(null);


  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteGame,
    isLoading: isDeletingGame,
  } = useMutation(GamesService.destroy);

  function handleShowConfirmDelete() {
    setShowConfirmDelete(true);
  }

  function handleHideConfirmDelete() {
    setShowConfirmDelete(false);
    swipeableRef.current?.close();
  }

  async function handleDeleteGame(id: any) {
    try {
      await deleteGame(id);
      await queryClient.invalidateQueries("games");
      Toast.show({
        type: "success",
        text1: "Game deleted",
        text2: "The game was deleted successfully",
        visibilityTime: 2000,
        autoHide: true,
      });

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    } finally {
      handleHideConfirmDelete();
    }

  }

  return {
    showConfirmDelete,
    handleShowConfirmDelete,
    handleHideConfirmDelete,
    swipeableRef,
    handleDeleteGame,
    handleShowEditModal
  }
}
