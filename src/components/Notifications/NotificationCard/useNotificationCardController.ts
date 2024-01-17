import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { NotificationsService } from "../../../services/notificationService";
import { INotification } from "../../../entities/Notification";
import { useAuth } from "../../../hooks/useAuth";

export function useNotificationCardController() {

  const { updateLoggedUser } = useAuth();

  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

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

  function handleOpenNotificationPopup(notification: INotification) {
    if (notification.read_at === null) {
      handleToggleRead(notification.id.toString())
    }

    setShowNotificationPopup(true);
  }

  function handleCloseNotificationPopup() {
    setShowNotificationPopup(false);
  }

  return {
    showNotificationPopup,
    handleOpenNotificationPopup,
    handleCloseNotificationPopup,
  }

}
