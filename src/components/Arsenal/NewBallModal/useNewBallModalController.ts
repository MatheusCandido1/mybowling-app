import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BallsService } from "../../../services/ballsService";
import { CreateBallParams } from "../../../services/ballsService/create";
import Toast from "react-native-toast-message";
import { useArsenal } from "../../../hooks/useArsenal";

const schema = z.object({
  name: z.string(),
  weight: z.string(),
  color: z.string()
});

type FormData = z.infer<typeof schema>;

export function useNewBallModalController() {

  const { showNewBallModal, handleCloseNewBallModal } = useArsenal();

  const weights = [
   8, 9, 10, 11, 12, 13, 14, 15, 16
  ];

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
    mutateAsync: createBall,
    isLoading: isCreatingBall,
  } = useMutation({
    mutationFn: async (data: CreateBallParams) => {
      return BallsService.create(data);
    }
  });

  async function onSubmit(data: any) {
    try {
      await createBall(data);
      reset();
      handleCloseNewBallModal();
      queryClient.invalidateQueries({ queryKey: ['balls'] });

      Toast.show({
        type: 'success',
        text1: 'Created',
        text2: 'New ball saved!',
        visibilityTime: 2000,
        autoHide: true,
      })
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
    weights,
    handleSubmit,
    onSubmit,
    register,
    control,
    errors,
    showNewBallModal,
    handleCloseNewBallModal
  }
}
