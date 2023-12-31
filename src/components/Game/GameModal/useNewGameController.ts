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
import { useEffect, useState } from "react";
import { useGroup } from "../../../hooks/useGroupGetAll";

const schema = z.object({
  game_date: z.date(),
  location_id: z.string({ required_error: 'Please select a location' }).nonempty({ message: 'Please select a location' }),
  ball_id:  z.string({ required_error: 'Please select a ball' }).nonempty({ message: 'Please select a ball.' }),
  group_id: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function useNewGameController() {
  const { locations, isFetching: isFetchingLocations } = useLocations();
  const { balls, isFetching: isFetchingBalls } = useBalls();
  const { onGoingGames } = useOnGoingGames();
  const { handleNewGame } = useGame();
  const { groups } = useGroup();

  const [enabledBalls, setEnabledBalls] = useState(false);

  useEffect(() => {
    if (balls.length > 0) {
      setEnabledBalls(true);
    }
  }, [balls]);

  const shouldEnableGroups = groups.length > 0;


  function toggleBalls() {
    if (balls.length === 0) {
      Toast.show({
        type: 'info',
        text1: 'Error',
        text2: 'No balls available. Update your arsenal.',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }
    setEnabledBalls(!enabledBalls);
  }

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

  async function onSubmit(data: FormData) {
    try {
      const game = await createGame(data);
      handleNewGame(game.data);
      queryClient.invalidateQueries({ queryKey: ['games'] });
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
    enabledBalls,
    toggleBalls,
    groups,
    shouldEnableGroups,
  };
}
