import { Header } from "../../components/Shared/Header";
import {
  Container,
  Content,
  AvatarContainer,
  AvatarRounded,
  UserName,
  Menu,
  MenuItem,
  MenuItemText
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Groups } from "../Groups";
import { GroupsProvider } from "../../contexts/GroupsContext";
import { Avatar } from "../../components/Shared/Avatar";

export function Profile() {
  const { loggedUser, logout } = useAuth();

  const [showGroupPage, setShowGroupPage] = useState(false);


  const user = {
    first_name: loggedUser?.name.split(' ')[0],
  }

  if(showGroupPage) {
    return (
      <GroupsProvider>
        <Groups
          hideGroupPage={() => setShowGroupPage(false)}
        />
      </GroupsProvider>
    )
  }

  return (
    <Container>
      <Header title="Profile" />
      <Content>
        <AvatarContainer>
          <AvatarRounded>
            <Avatar
              size={135}
              imageUri={loggedUser?.avatar}
            />
          </AvatarRounded>
          <UserName>Hi, {user.first_name} 👋</UserName>
        </AvatarContainer>
        <Menu>
          <MenuItem>
            <MaterialCommunityIcons name="playlist-edit" size={28} color="#0d9488" />
            <MenuItemText>Edit Profile</MenuItemText>
          </MenuItem>

          <MenuItem
            onPress={() => setShowGroupPage(true)}
          >
            <MaterialCommunityIcons name="account-group" size={28} color="#0d9488" />
            <MenuItemText>Groups</MenuItemText>
          </MenuItem>

          <MenuItem>
            <Ionicons name="notifications-outline" size={28} color="#0d9488" />
            <MenuItemText>Notification Preferences</MenuItemText>
          </MenuItem>

        </Menu>

        <MenuItem
          onPress={logout}
          style={{justifyContent: 'center'}}
        >
          <MaterialIcons name="logout" size={28} color="#0d9488" />
          <MenuItemText>Logout</MenuItemText>
        </MenuItem>
      </Content>
    </Container>
  )
}
