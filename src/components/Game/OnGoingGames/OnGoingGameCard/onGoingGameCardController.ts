import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { GamesService } from "../../../../services/gamesService";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export function onGoingGameCardController() {
  const swipeableRef = useRef(null);

  const navigation = useNavigation();

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

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

      // Navigate to the games list
      navigation.navigate('Games');

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
    isDeletingGame
  }
}
