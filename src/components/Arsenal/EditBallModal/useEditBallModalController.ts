import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BallsService } from "../../../services/ballsService";
import Toast from "react-native-toast-message";
import { useArsenal } from "../../../hooks/useArsenal";
import { UpdateBallParams } from "../../../services/ballsService/update";
import { useState } from "react";

const schema = z.object({
  name: z.string(),
  weight: z.string(),
  color: z.string()
});

type FormData = z.infer<typeof schema>;

export function useEditBallModalController() {

  const { showEditBallModal, handleCloseEditBallModal , selectedBall} = useArsenal();

  const [showConfirmDeletePopup, setShowConfirmDeletePopup] = useState(false);

  function handleOpenConfirmDeletePopup() {
    setShowConfirmDeletePopup(true);
  }

  function handleCloseConfirmDeletePopup() {
    setShowConfirmDeletePopup(false);
  }

  const weights = [8, 9, 10, 11, 12, 13, 14, 15, 16];

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: selectedBall?.name,
      weight: selectedBall?.weight.toString(),
      color: selectedBall?.color
    }
  });

  const queryClient = useQueryClient();
  const {
    mutateAsync: updateBall,
    isLoading: isUpdatingBall,
  } = useMutation({
    mutationFn: async (data: UpdateBallParams) => {
      return BallsService.update(data);
    }
  });

  async function onSubmit(data: any) {
    try {
      await updateBall({
        ...data,
        id: selectedBall?.id
      });
      reset();
      handleCloseEditBallModal();
      queryClient.invalidateQueries({ queryKey: ['balls'] });

      Toast.show({
        type: 'success',
        text1: 'Updated',
        text2: 'Ball updated!',
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

  const {
    mutateAsync: deleteBall,
    isLoading: isDeletingBall,
  } = useMutation(BallsService.destroy);

  async function handleDeleteBall() {
    try {
      await deleteBall(selectedBall!.id);
      queryClient.invalidateQueries({ queryKey: ['balls'] });
      handleCloseConfirmDeletePopup();
      handleCloseEditBallModal();

      Toast.show({
        type: 'success',
        text1: 'Deleted',
        text2: 'Ball deleted!',
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
    showEditBallModal,
    handleCloseEditBallModal,
    isUpdatingBall,
    showConfirmDeletePopup,
    handleOpenConfirmDeletePopup,
    handleCloseConfirmDeletePopup,
    handleDeleteBall
  }
}
