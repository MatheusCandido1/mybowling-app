import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from 'react-native-toast-message';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GamesService } from "../../../services/gamesService";
import { useBalls } from "../../../hooks/useBalls";
import { useLocations } from "../../../hooks/useLocations";
import { useGames } from "../../../hooks/useGames"
import { useGroupGetAll } from "../../../hooks/useGroupGetAll";

const schema = z.object({
  game_date: z.date(),
  location_id: z.string({ required_error: 'Please select a location' }).nonempty({ message: 'Please select a location' }),
  ball_id:  z.string({ required_error: 'Please select a ball' }).nonempty({ message: 'Please select a ball.' }),
  group_id: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function useEditGameModalController() {

  const { showEditModal, handleCloseEditModal} = useGames();

  const { locations, isFetching: isFetchingLocations } = useLocations();
  const { balls, isFetching: isFetchingBalls } = useBalls();
  const { groups } = useGroupGetAll();
  const shouldEnableGroups = groups.length > 0;

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {

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
    showEditModal,
    handleCloseEditModal,
    locations,
    isFetchingLocations,
    balls,
    isFetchingBalls,
    handleSubmit,
    register,
    control,
    errors,
    reset,
    groups,
    shouldEnableGroups,
    onSubmit
  }
}
