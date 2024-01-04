import { useNavigation } from "@react-navigation/native";
import { useProfile } from "../../hooks/useProfile";
import { useAuth } from "../../hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";

export function useProfileController() {

  const queryClient = useQueryClient();

  const navigation = useNavigation();

  const { loggedUser, logout } = useAuth();

  const user = {
    first_name: loggedUser?.name.split(' ')[0],
  }

  function handleGroupsPress() {
    navigation.navigate('GroupStack', { screen: 'Groups'});
  }

  function handleLogout() {
    queryClient.clear();
    logout();
  }

  const {
    handleShowUpdateProfileModal,
    handleShowUpdatePasswordModal
  } = useProfile();


  return {
    handleShowUpdateProfileModal,
    handleShowUpdatePasswordModal,
    user,
    handleGroupsPress,
    logout,
    loggedUser,
    handleLogout
  }
}
