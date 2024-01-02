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
import { Avatar } from "../../components/Shared/Avatar";
import { useNavigation } from "@react-navigation/native";
import { EditProfileModal } from "../../components/Profile/EditProfileModal";
import { useProfileController } from "./useProfileController";

export function Profile() {
  const navigation = useNavigation();

  const { loggedUser, logout } = useAuth();

  const {
    handleShowUpdateProfileModal
  } = useProfileController();


  const user = {
    first_name: loggedUser?.name.split(' ')[0],
  }

  function handleGroupsPress() {
    navigation.navigate('GroupStack', { screen: 'Groups'});
  }

  return (
    <Container>
      <Header
      title="Profile"
      onPress={() => navigation.goBack()}
     />
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


          <MenuItem
            onPress={handleGroupsPress}
          >
            <MaterialCommunityIcons name="account-group" size={28} color="#0d9488" />
            <MenuItemText>Groups</MenuItemText>
          </MenuItem>
          <MenuItem
            onPress={handleShowUpdateProfileModal}
          >
            <MaterialCommunityIcons name="playlist-edit" size={28} color="#0d9488" />
            <MenuItemText>Edit Profile</MenuItemText>
          </MenuItem>


          <MenuItem
            onPress={handleShowUpdateProfileModal}
          >
            <MaterialCommunityIcons name="account-lock-open" size={28} color="#0d9488" />
            <MenuItemText>Update Password</MenuItemText>
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
       <EditProfileModal />
    </Container>
  )
}
