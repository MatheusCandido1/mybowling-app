import { INotification } from "../../../entities/Notification";
import { formatDistance } from "../../../utils/formatDate";
import { NotificationPopup } from "../NotificationPopup";
import { WelcomeNotification } from "../WelcomeNotification";
import {
  ActionContainer,
  Author,
  AuthorContainer,
  Container,
  Content,
  DateContainer,
  FooterContainer,
  Title,
  TitleContainer,
  ToggleText,
  Date,
  NewMessageContainer,
  NewMessageText
} from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNotificationCardController } from "./useNotificationCardController";
import { GroupInviteNotification } from "../GroupInviteNotification";

interface NotificationCardProps {
  notification: INotification;
  onPress: () => void;
}

export function NotificationCard({ notification, onPress }: NotificationCardProps) {
  const isRead = notification.read_at !== null;

  const {
    showNotificationPopup,
    handleCloseNotificationPopup,
    handleOpenNotificationPopup
  } = useNotificationCardController();

  const NewNotification = () => {
    return (
      <NewMessageContainer>
        <NewMessageText>New</NewMessageText>
      </NewMessageContainer>
    )
  }

  return (
    <>
    {!isRead ? <NewNotification /> : null}
    <Container>
      <Content
        onPress={() => {handleOpenNotificationPopup(notification)}}
      >
      <TitleContainer>
        <Title>{notification.content.title}</Title>
      </TitleContainer>
      <AuthorContainer>
        <Author>From: {notification.author}</Author>
      </AuthorContainer>
      {notification.type === 'WELCOME' ? (<WelcomeNotification notification={notification} />):null}
      {notification.type === 'GROUP_INVITE' ? (<GroupInviteNotification notification={notification} />):null}
      </Content>
      <FooterContainer>

      <DateContainer style={{flexDirection: 'row'}}>
          <Feather name="clock" size={12} color="#0d9488" />
          <Date>{formatDistance(notification.created_at)}</Date>
        </DateContainer>
        <ActionContainer onPress={onPress}>
          <ToggleText>{isRead ? 'Mark as Read':'Mark as Unread'}</ToggleText>
          <Ionicons name={!isRead ? 'mail': 'mail-open'} size={22} color="#FFF" />
        </ActionContainer>
      </FooterContainer>
    </Container>
    <NotificationPopup
      notification={notification}
      visible={showNotificationPopup}
      onClose={handleCloseNotificationPopup}
    />
    </>
  )
}
