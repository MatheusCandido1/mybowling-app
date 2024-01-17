import { useState } from "react";
import { INotification } from "../../../entities/Notification";
import { NotificationPopup } from "../NotificationPopup";
import {
  GroupsContainer,
  Message,
  MessageContainer,
  SeeGroupsButton,
  SeeGroupsButtonText
} from "./styles";
import { Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


interface GroupInviteNotificationProps {
  notification: INotification;
}

export function GroupInviteNotification({ notification }: GroupInviteNotificationProps) {
  const navigation = useNavigation();

  function navigateToGroups() {
    navigation.navigate(
      'InternalStack', {
        screen: 'groups',
        params: { showInvites: true}
      }
    );
  }

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
        <GroupsContainer>
          <SeeGroupsButton
            onPress={navigateToGroups}
          >
            <SeeGroupsButtonText>See Invite</SeeGroupsButtonText>
            <MaterialCommunityIcons name="chevron-double-right" size={16} color="#FFF" />
          </SeeGroupsButton>

        </GroupsContainer>
      </MessageContainer>
    </>
  )
}
