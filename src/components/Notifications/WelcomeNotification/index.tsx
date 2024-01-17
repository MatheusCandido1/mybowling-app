import { useState } from "react";
import { INotification } from "../../../entities/Notification";
import { NotificationPopup } from "../NotificationPopup";
import {
  Message,
  MessageContainer
} from "./styles";
import { Text } from 'react-native';


interface WelcomeNotificationProps {
  notification: INotification;
}

export function WelcomeNotification({ notification }: WelcomeNotificationProps) {
  return (
    <>
      <MessageContainer>
        <Message>
        {notification.content.body.length > 215 ? (
          <>
            {notification.content.body.substring(0, 215)}{''}
            <Text>...</Text>
            <Text style={{textDecorationLine: 'underline', color: '#0d9488'}}>(see more)</Text>
          </>
        ) : (
          notification.content.body
        )}
        </Message>
      </MessageContainer>
    </>
  )
}
