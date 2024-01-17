import { useMutation } from "@tanstack/react-query";
import { UsersService } from "../../services/userService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export function useFirstAccessController() {
  const [terms, setTerms] = useState(false);
  const [promotions, setPromotions] = useState(false);

  function handleTermCheck() {
    setTerms(!terms);
  }

  function handlePromotionCheck() {
    setPromotions(!promotions);
  }

  const { fetchLoggedUser } = useAuth();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async () => {
      return UsersService.firstAccess();
    },
  })

  const onSubmit = async () => {
    try {

      if(!terms) {
        Toast.show({
          type: 'info',
          text1: 'Terms and Conditions',
          text2: 'You must accept the terms and conditions',
          visibilityTime: 3000,
          autoHide: true,
        })
        return;
      }

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
      console.log(error.response.data)
    }
  }

  return {
    onSubmit,
    isLoading,
    terms,
    promotions,
    handlePromotionCheck,
    handleTermCheck
  }
}
