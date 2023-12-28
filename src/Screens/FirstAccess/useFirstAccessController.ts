import { useMutation } from "@tanstack/react-query";
import { UsersService } from "../../services/userService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useAuth } from "../../hooks/useAuth";

export function useFirstAccessController() {

  const { fetchLoggedUser } = useAuth();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async () => {
      return UsersService.firstAccess();
    },
  })

  const onSubmit = async () => {
    try {
      const response = await mutateAsync();

      await AsyncStorage.setItem('loggedUser', JSON.stringify(response.data));

      fetchLoggedUser(response.data)

      const storage = await AsyncStorage.getItem('loggedUser');

      Toast.show({
        type: 'success',
        text1: 'Welcome',
        text2: response.message,
        visibilityTime: 2000,
        autoHide: true,
      })
    } catch (error) {
      console.log(error);
    }
  }

  return {
    onSubmit,
    isLoading,
  }
}
