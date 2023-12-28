import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GamesService } from "../../services/gamesService";
import { useGame } from "../../hooks/useGame";

export function useGameController() {

  const {
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList,
    isGameDone,
    handleSaveGame,
    currentFrame,
    score
  } = useGame();

  const queryClient = useQueryClient();

  const {
    mutateAsync: updateGame,
    isLoading: isUpdatingGame
  } = useMutation(GamesService.update)

  const handleSubmit = async () => {
    const data = {
      id: currentFrame.id,
      status: currentFrame.status,
      total_score: score
    }

    handleSaveGame();
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
