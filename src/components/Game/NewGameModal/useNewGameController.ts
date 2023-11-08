import { z } from "zod";
import { useBalls } from "../../../hooks/useBalls";
import { useLocations } from "../../../hooks/useLocations";
import { useMutation } from "@tanstack/react-query";
import { GamesService } from "../../../services/gamesService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGameParams } from "../../../services/gamesService/create";
import Toast from 'react-native-toast-message';


const schema = z.object({
  game_date: z.date(),
  location_id: z.string({ required_error: 'Please select a location' }),
  ball_id: z.string({ required_error: 'Please select a ball' }),
});

type FormData = z.infer<typeof schema>;

export function useNewGameController() {
  const { locations, isFetching: isFetchingLocations } = useLocations();
  const { balls, isFetching: isFetchingBalls } = useBalls();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const {
    mutateAsync: createGame,
    isLoading: isCreatingGame,
  } = useMutation({
    mutationFn: async (data: CreateGameParams) => {
      return GamesService.create(data);
    }
  });

  async function onSubmit(data: any) {
    try {
      // await createGame(data);
      Toast.show({
        type: 'success',
        text1: 'MyBowling App',
        text2: "Game created successfully! Let's roll!",
        visibilityTime: 2000,
        autoHide: true,
      })
      reset({
        game_date: new Date(),
        location_id: undefined,
        ball_id: '',
      });
      // Navigate
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
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
    reset
  }
}
