import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginParams } from "../../../services/authService/login";
import { AuthService } from "../../../services/authService";
import Toast from 'react-native-toast-message';
import { useAuth } from "../../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
  email: z.string({ required_error: 'Email is required' }).nonempty({ message: 'Email is required' }),
  password: z.string({ required_error: 'Password is required' }).nonempty({ message: 'Password is required' }),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const { login } = useAuth();

  const navigation = useNavigation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: LoginParams) => {
      return AuthService.login(data);
    },
  })
  const queryClient = useQueryClient();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { user, access_token } = await mutateAsync(data);
      queryClient.clear();
      login(user, access_token);
    } catch (error) {
      const message = error.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Authentication Error',
        text2: message ? message : 'Something went wrong',
        visibilityTime: 3000,
        autoHide: true,
      })


    }
  });

  function handleNewAccountPress() {
    navigation.navigate('register');
  }

  function handleForgotPasswordPress() {
    navigation.navigate('resetPassword');
  }

  return { onSubmit, handleSubmit, control, register, errors, isLoading, handleNewAccountPress, handleForgotPasswordPress }
}
