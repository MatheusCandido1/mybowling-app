import { Header } from "../../components/Shared/Header";
import {
  Container,
  Content,
  AvatarContainer,
  AvatarRounded,
  UserName,
  Menu,
  MenuItem,
  MenuItemText,
  VersionText,
  VersionContainer
} from "./styles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "../../components/Shared/Avatar";
import { useNavigation } from "@react-navigation/native";
import { EditProfileModal } from "../../components/Profile/EditProfileModal";
import { useProfileController } from "./useProfileController";
import { UpdatePasswordModal } from "../../components/Profile/UpdatePasswordModal";
import { appVersion } from "../../utils/getAppInfo";
import { View } from "react-native";
import { isDeviceSmall } from "../../utils/deviceDimensions"
import { DeleteAccountModal } from "../../components/Profile/DeleteAccountModal";

export function Profile() {
  const navigation = useNavigation();

  const {
    handleShowUpdateProfileModal,
    handleShowUpdatePasswordModal,
    handleGroupsPress,
    user,
    loggedUser,
    handleLogout,
    handleNotificationsPress,
    handleShowDeleteAccountModal
  } = useProfileController();


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
              size={100}
              imageUri={loggedUser?.avatar}
            />
          </AvatarRounded>
          <UserName>Hi, {user.first_name} 👋</UserName>
        </AvatarContainer>
        <Menu
          scrollEnabled={isDeviceSmall}
          showsVerticalScrollIndicator={isDeviceSmall}
        >
          <View>

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
            onPress={handleShowUpdatePasswordModal}
          >
            <MaterialCommunityIcons name="account-lock-open" size={28} color="#0d9488" />
            <MenuItemText>Update Password</MenuItemText>
          </MenuItem>

          <MenuItem
            onPress={handleNotificationsPress}
          >
            <MaterialCommunityIcons name="bell-ring-outline" size={28} color="#0d9488" />
            <MenuItemText>Notifications</MenuItemText>
          </MenuItem>

          <MenuItem
            onPress={handleShowDeleteAccountModal}
          >
            <MaterialCommunityIcons name="account-wrench" size={28} color="#0d9488" />
            <MenuItemText>Account Settings</MenuItemText>
          </MenuItem>
          </View>

        </Menu>

        <MenuItem
          onPress={handleLogout}
          style={{justifyContent: 'center', marginTop: 12}}
        >
          <MaterialIcons name="logout" size={28} color="#0d9488" />
          <MenuItemText>Logout</MenuItemText>
        </MenuItem>
      </Content>
        <VersionContainer>
        <VersionText>Version: {appVersion}</VersionText>
        </VersionContainer>
      <EditProfileModal />
      <UpdatePasswordModal />
      <DeleteAccountModal />
    </Container>
  )
}
