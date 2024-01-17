import { useNavigation } from '@react-navigation/native';
import { useNotifications } from '../../hooks/useNotifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NotificationsService } from '../../services/notificationService';
import { useAuth } from '../../hooks/useAuth';

export function useNotificationController() {

  const { notifications, isFetching } = useNotifications();
  const { updateLoggedUser } = useAuth();


  const navigation = useNavigation();

  function handleBackButtonPress() {
    navigation.goBack();
  }


  const {
    mutateAsync: toggleRead,
    isLoading
  } = useMutation(NotificationsService.toggleRead)

  const queryClient = useQueryClient();

  async function handleToggleRead(id: string) {
    try {
      const response = await toggleRead(id);
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      updateLoggedUser(response.user)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleBackButtonPress,
    notifications,
    isFetching,
    handleToggleRead
  }
}
