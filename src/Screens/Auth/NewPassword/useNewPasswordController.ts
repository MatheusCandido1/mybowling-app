import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../services/authService";
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResetPasswordParams } from "../../../services/authService/resetPassword";

const schema = z.object({
  password: z.string({ required_error: 'Password is required' }).nonempty({ message: 'Password is required' }),
  password_confirmation: z.string({ required_error: 'Password Confirmation is required' }).nonempty({ message: 'Password Confirmation is required' }),
});

type FormData = z.infer<typeof schema>;

export function useNewPasswordController() {
  const route = useRoute();
  const navigation = useNavigation();

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
    mutationFn: async (data: ResetPasswordParams) => {
      return AuthService.resetPassword(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {

      if(data.password !== data.password_confirmation) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Password and Password Confirmation must be the same.',
          visibilityTime: 3000,
          autoHide: true,
        })
        return;
      }

      const payload: ResetPasswordParams = {
        email: route.params['email'],
        token: route.params['token'],
        password: data.password
      }

      await mutateAsync(payload);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Password reset successfully',
        visibilityTime: 3000,
        autoHide: true,
      })
      navigation.navigate('login');

    } catch (error) {
      reset();
      const errorResponse = error?.response.data.error;

      console.log(error.response)

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorResponse ? errorResponse : 'Something went wrong',
        visibilityTime: 3000,
        autoHide: true,
      })
    }
  });


  return { onSubmit, handleSubmit, control, register, errors, isLoading }
}
