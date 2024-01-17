import { Modal, TouchableOpacity } from "react-native";
import {
  Overlay,
  Container,
  PopupContainer,
  PopupTitle,
  PopupHeader,
  PopupContent,
  PopupFooter,
  AuthorContainer,
  Author,
  DateContainer,
  Date
 } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { INotification } from "../../../entities/Notification";
import { WelcomeNotificationPopup } from "../WelcomeNotificationPopup";
import { Feather, Ionicons } from "@expo/vector-icons";
import { formatDistance } from "../../../utils/formatDate";
import { GroupInviteNotificationPopup } from "../GroupInviteNotificationPopup";

interface NotificationPopupProps {
  notification: INotification;
  visible: boolean;
  onClose: () => void;
}


export function NotificationPopup({ notification, visible, onClose  }: NotificationPopupProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
    >
    <Overlay>
      <Container>
        <PopupContainer>
          <PopupHeader>
            <PopupTitle>{notification.content.title}</PopupTitle>
            <TouchableOpacity
              onPress={onClose}
            >
              <MaterialCommunityIcons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </PopupHeader>
          <PopupContent>
            <AuthorContainer>
              <Author>From: {notification.author}</Author>
            </AuthorContainer>
            {notification.type === 'WELCOME' ? (<WelcomeNotificationPopup notification={notification} />):null}
            {notification.type === 'GROUP_INVITE' ? (<GroupInviteNotificationPopup notification={notification} onNavigate={onClose} />):null}

          </PopupContent>
          <PopupFooter>
            <DateContainer>
              <Feather name="clock" size={12} color="#808080" />
              <Date>{formatDistance(notification.created_at)}</Date>
            </DateContainer>
          </PopupFooter>
        </PopupContainer>
      </Container>
    </Overlay>
    </Modal>
  )
}
