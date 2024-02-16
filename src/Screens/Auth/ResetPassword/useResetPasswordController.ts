import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthService } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordParams } from "../../../services/authService/forgotPassword";
import Toast from "react-native-toast-message";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard';
import { ValidatePasswordCodeParams } from "../../../services/authService/validatePasswordCode";
import { useNavigation } from "@react-navigation/native";



const schema = z.object({
  email: z.string({ required_error: 'Email is required' }).nonempty({ message: 'Email is required' }),
});

type FormData = z.infer<typeof schema>;

export function useResetPasswordController() {

  const navigation = useNavigation();

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isValidUser, setIsValidUser] = useState(false);
  const [userEmail, setUserEmail] = useState('' as string);

  function onUpdateCode(index: number, value: string) {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    const code = text.slice(0, 6).split('');
    setCode(code);
    await validateCode(code.join(''));
  };

  function onPaste() {
    fetchCopiedText()
  }

  async function validateCode(passwordCode: string) {
    try {
      const payload: ValidatePasswordCodeParams = {
        email: userEmail,
        token: passwordCode
      }
     // await validatePasswordCode(payload);
      navigation.navigate('newPassword', { email: userEmail, token: passwordCode });

    } catch(error) {
      const message = error.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Reset Password',
        text2: message ? message : 'Invalid code. Check your email for the correct code.',
        visibilityTime: 3000,
        autoHide: true,
      })
      setCode(['', '', '', '', '', '']);

    }

  }


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: validatePasswordCode } = useMutation({
    mutationFn: async (data: ValidatePasswordCodeParams) => {
      return AuthService.validatePasswordCode(data);
    },
  })

  const { mutateAsync: getValidationCode, isLoading } = useMutation({
    mutationFn: async (data: ForgotPasswordParams) => {
      return AuthService.forgotPassword(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await getValidationCode(data);

      Toast.show({
        type: 'success',
        text1: 'Reset Password',
        text2: response.message,
        visibilityTime: 2000,
        autoHide: true,
      })

      setUserEmail(data.email);
      setIsValidUser(true);

    } catch (error) {
      const message = error.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Reset Password',
        text2: message ? message : 'We could not find a user with that email.',
        visibilityTime: 3000,
        autoHide: true,
      })

    }
  });

  function handleAlreadyUserPress() {
    navigation.navigate('login');
  }

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    isValidUser,
    code,
    onUpdateCode,
    onPaste,
    handleAlreadyUserPress
  }
}
