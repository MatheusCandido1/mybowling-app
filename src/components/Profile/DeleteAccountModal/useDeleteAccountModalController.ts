import { useState } from "react";
import { useProfile } from "../../../hooks/useProfile"
import { useMutation } from "@tanstack/react-query";
import { UsersService } from "../../../services/userService";
import { useAuth } from "../../../hooks/useAuth";
import Toast from 'react-native-toast-message';

export function useDeleteAccountModalController() {

  const [confirmation, setConfirmation] = useState('');

  const {
    logout
  } = useAuth();

  function handleConfirmationChange(confirmation: string) {
    setConfirmation(confirmation);
  }


  const {
    mutateAsync: deleteAccount,
  } = useMutation(UsersService.destroy);

  async function handleDeleteAccount() {
    try {
      await deleteAccount();
      Toast.show({
        type: 'success',
        text1: 'Account Deleted',
        text2: 'Thank you for using My Bowling App!',
        visibilityTime: 2000,
        autoHide: true,
      })
      logout();

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
    showDeleteAccountModal,
    handleCloseDeleteAccountModal
  } = useProfile();

  return {
    showDeleteAccountModal,
    handleCloseDeleteAccountModal,
    confirmation,
    handleConfirmationChange,
    handleDeleteAccount
  }
}
