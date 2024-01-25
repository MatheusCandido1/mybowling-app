import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GamesService } from "../../services/gamesService";
import { useGame } from "../../hooks/useGame";
import { UpdateGameParams } from "../../services/gamesService/update";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export function useGameController() {

  const {
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList,
    isGameDone,
    handleSaveGame,
    score,
    currentGame,
    resetGame,
  } = useGame();

  const queryClient = useQueryClient();

  const navigation = useNavigation();

  const {
    mutateAsync: updateGame,
    isLoading: isUpdatingGame
  } = useMutation(GamesService.update)

  const handleSubmit = async () => {
    try {
      const data: UpdateGameParams = {
        id: currentGame!.id,
        total_score: score,
        status: isGameDone ? 'COMPLETED' : 'IN_PROGRESS',
        frames: currentGame!.frames
      }

      await updateGame(data)


    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "We couldn't save your game. Please try again.",
        visibilityTime: 2000,
        autoHide: true,
      })

    } finally {
      queryClient.invalidateQueries('games')
      resetGame();
      navigation.navigate('Tabs', {screen: 'Dashboard'});
    }
  }

  return {
    handleSubmit,
    isUpdatingGame,
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList,
    isGameDone,
    handleSaveGame,
  }
}
