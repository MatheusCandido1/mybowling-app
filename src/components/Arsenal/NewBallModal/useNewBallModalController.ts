import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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
    { name: '8 lbs', id: 8},
    { name: '9 lbs', id: 9},
    { name: '10 lbs', id: 10},
    { name: '11 lbs', id: 11},
    { name: '12 lbs', id: 12},
    { name: '13 lbs', id: 13},
    { name: '14 lbs', id: 14},
    { name: '15 lbs', id: 15},
    { name: '16 lbs', id: 16},
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
