import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginParams } from "../../../services/authService/login";
import { AuthService } from "../../../services/authService";
import Toast from 'react-native-toast-message';
import { useAuth } from "../../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
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
    mutationFn: async (data: loginParams) => {
      return AuthService.login(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { user, access_token } = await mutateAsync(data);
      login(user, access_token);
    } catch (error) {
      const errorResponse = error?.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorResponse ? errorResponse : 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    }
  });

  function handleNewAccountPress() {
    navigation.navigate('register');
  }

  return { onSubmit, handleSubmit, control, register, errors, isLoading, handleNewAccountPress }
}
