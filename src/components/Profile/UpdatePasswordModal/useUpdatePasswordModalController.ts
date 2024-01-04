import { UsersService } from "../../../services/userService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Toast from 'react-native-toast-message';
import { useProfile } from '../../../hooks/useProfile';
import { UpdatePasswordParams } from '../../../services/userService/password';

const schema = z.object({
  currentPassword: z.string({ required_error: 'Current password is required' }).nonempty({ message: 'Current password is required' }),
  newPassword: z.string({ required_error: 'New password is required'}).nonempty({ message: 'New password is required' }),
  newPasswordConfirmation: z.string({ required_error: 'Password confirmation is required' }).nonempty({ message: 'Password confirmation is required' })
});

type FormData = z.infer<typeof schema>;

export function useUpdatePasswordModalController() {
  const { showUpdatePasswordModal, handleCloseUpdatePasswordModal} = useProfile();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: UpdatePasswordParams) => {
      return UsersService.password(data);
    },
  })

  function showToast(message: string) {
    Toast.show({
      type: 'error',
      text1: 'Update Password',
      text2: message,
      visibilityTime: 3000,
      autoHide: true,
    })
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      reset();
      handleCloseUpdatePasswordModal();
      Toast.show({
        type: 'success',
        text1: 'Password Updated',
        text2: 'Your password has been updated',
        visibilityTime: 2000,
        autoHide: true,
      })

    } catch (error) {
      showToast(error.response.data.message || 'Something went wrong')
      reset();
    }
  });



  return {
    isLoading,
    onSubmit,
    handleSubmit,
    control,
    register,
    errors,
    showUpdatePasswordModal,
    handleCloseUpdatePasswordModal
  }
}
