import { useNavigation } from "@react-navigation/native";
import { INotification } from "../../../entities/Notification";
import { GroupsContainer, Message, MessageContainer, SeeGroupsButton, SeeGroupsButtonText } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface WelcomeNotificationPopupProps {
  notification: INotification;
  onNavigate: () => void;
}

export function GroupInviteNotificationPopup({ notification, onNavigate }: WelcomeNotificationPopupProps) {
  const navigation = useNavigation();

  function navigateToGroups() {
    onNavigate();
    navigation.navigate(
      'InternalStack', {
        screen: 'groups',
        params: { showInvites: true}
      }
    );
  }

  return (
    <MessageContainer>
      <Message>
        {notification.content.body}
      </Message>

      <GroupsContainer>
          <SeeGroupsButton
            onPress={navigateToGroups}
          >
            <SeeGroupsButtonText>See Invite</SeeGroupsButtonText>
            <MaterialCommunityIcons name="chevron-double-right" size={16} color="#FFF" />
          </SeeGroupsButton>

        </GroupsContainer>
    </MessageContainer>
  )
}
