import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGroup } from "../../../hooks/useGroup";
import { GroupsService } from "../../../services/groupsService";
import Toast from "react-native-toast-message";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export function useMemberDetailsModalController() {

  const { loggedUser } = useAuth();

  const navigation = useNavigation();

  const {
    showConfirmRemovePopup,
    showMemberDetailsModal,
    selectedMember,
    handleCloseMemberDetailsModal,
    handleShowConfirmDeletePopup,
    handleCloseConfirmDeletePopup,
    selectedGroup,
    isLoggedUserAdmin
  } = useGroup();

  const queryClient = useQueryClient();
  const {
    mutateAsync,
    isLoading
  } = useMutation({
    mutationFn: async (data: any) => {
      return GroupsService.removeUser(data);
    }
  });

  async function handleConfirmDelete() {
    try {
      await mutateAsync
      ({
        group_id: selectedGroup?.id,
        member_id: selectedMember?.id
      });
      queryClient.invalidateQueries({ queryKey: ['group'] });
      queryClient.invalidateQueries({ queryKey: ['groups'] });

      // Redirect to groups list

      Toast.show({
        type: 'success',
        text1: 'Updated',
        text2: 'Member removed!',
        visibilityTime: 2000,
        autoHide: true,
      });

      handleCloseMemberDetailsModal();

      if(!isLoggedUserAdmin) {
        navigation.navigate('InternalStack', {screen: 'groups'});
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    }
  }

  const group = {
    owner_id: '1'
  }

  function isCurrentUserAdmin() {
    return loggedUser?.id == group.owner_id;
  }

  function allowRemove() {
    // return isCurrentUserAdmin() ? loggedUser?.id !== selectedMember?.id : loggedUser?.id === selectedMember?.id;
    return false
  }

  return {
    showConfirmRemovePopup,
    showMemberDetailsModal,
    selectedMember,
    handleCloseMemberDetailsModal,
    handleCloseConfirmDeletePopup,
    handleConfirmDelete,
    handleShowConfirmDeletePopup,
    loggedUser,
    allowRemove
  }
}
