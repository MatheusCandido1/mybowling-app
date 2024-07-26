import { z } from "zod";
import { useBalls } from "../../../hooks/useBalls";
import { useLocations } from "../../../hooks/useLocations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GamesService } from "../../../services/gamesService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from 'react-native-toast-message';
import { useOnGoingGames } from "../../../hooks/useOnGoingGames";
import { useGame } from "../../../hooks/useGame";
import { useGroupGetAll } from "../../../hooks/useGroupGetAll";
import { useGameShow } from "../../../hooks/useGameShow";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
  game_date: z.date(),
  ball_id:  z.string({ required_error: 'Please select a ball' }).nonempty({ message: 'Please select a ball.' }),
  group_id: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function useNewGameController() {
  const { handleResumeGame } = useGame();

  const navigation = useNavigation();

  const { locations, isFetching: isFetchingLocations } = useLocations();
  const { balls, isFetching: isFetchingBalls } = useBalls();
  const { onGoingGames } = useOnGoingGames();
  const { handleNewGame } = useGame();
  const { groups, isFetchingGroups } = useGroupGetAll();
  const { selectedLocation, resetSelectedLocation } = useGame();

  const shouldEnableGroups = groups.length > 0;

  const isLoadingPage = isFetchingLocations || isFetchingBalls || isFetchingGroups;

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const {
    mutateAsync: createGame,
    isLoading: isCreatingGame,
  } = useMutation({
    mutationFn: async (data: FormData) => {
      return GamesService.create(data);
    },
  });

  function handleContinueGame(game: any) {
    handleResumeGame(game);
  }

  async function onSubmit(data: FormData) {
    try {
      const payload = {
        ...data,
        location_id: selectedLocation?.id,
      }
      const game = await createGame(payload);
      handleNewGame(game.data);
      queryClient.invalidateQueries({ queryKey: ['games'] });
      resetSelectedLocation();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      });
    }
  }

  return {
    locations,
    isFetchingLocations,
    balls,
    isFetchingBalls,
    handleSubmit,
    onSubmit,
    register,
    control,
    errors,
    isCreatingGame,
    reset,
    onGoingGames,
    groups,
    shouldEnableGroups,
    handleContinueGame,
    isLoadingPage
  };
}
