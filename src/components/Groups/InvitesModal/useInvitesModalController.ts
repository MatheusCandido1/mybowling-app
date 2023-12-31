import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGroup } from "../../../hooks/useGroupGetAll";
import { useGroups } from "../../../hooks/useGroups";
import { GroupsService } from "../../../services/groupsService";
import Toast from "react-native-toast-message";

export function useInvitesModalController() {

  const { invites } = useGroup();

  const { showInviteModal, handleCloseInviteModal } = useGroups();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: any) => {
      return GroupsService.reply(data);
    },
  })

  async function handleSubmit(id: string, reply: string) {
    try {

      const payload = {
        id,
        reply
      }

      const response = await mutateAsync(payload);

      Toast.show({
        type: 'success',
        text1: 'Invite',
        text2: response.message,
        visibilityTime: 2000,
        autoHide: true,
      });

      queryClient.invalidateQueries({ queryKey: ['groups'] });

    } catch (error) {
      const errorResponse = error?.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorResponse ? errorResponse : 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    } finally {
      handleCloseInviteModal();
    }

  }

  return {
    invites,
    showInviteModal,
    handleCloseInviteModal,
    handleSubmit
  }
}
