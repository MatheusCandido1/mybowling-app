import { INotification } from "../../../entities/Notification";
import { Message, MessageContainer } from "./styles";

interface WelcomeNotificationPopupProps {
  notification: INotification;
}

export function WelcomeNotificationPopup({ notification}: WelcomeNotificationPopupProps) {
  return (
    <MessageContainer>
      <Message>
        {notification.content.body}
      </Message>
    </MessageContainer>
  )
}
