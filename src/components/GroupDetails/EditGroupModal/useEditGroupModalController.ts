import { useGroup } from "../../../hooks/useGroup";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GroupsService } from "../../../services/groupsService";
import { CreateGroupParams } from "../../../services/groupsService/create";
import Toast from 'react-native-toast-message';
import { useState } from "react";
import { useGroups } from "../../../hooks/useGroups";
import { UpdateGroupParams } from "../../../services/groupsService/update";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
  name: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

export function useEditGroupModalController() {
  const navigation = useNavigation();

  const [showConfirmDeletePopup, setShowConfirmDeletePopup] = useState(false);

  function handleCloseConfirmDeletePopup() {
    setShowConfirmDeletePopup(false);
  }

  function handleOpenConfirmDeletePopup() {
    setShowConfirmDeletePopup(true);
  }

  const [showDeleteContainer, setShowDeleteContainer] = useState(false);

  const { selectedGroup } = useGroup();

  function toggleShowDeleteContainer() {
    setShowDeleteContainer((prev) => !prev);
  }

  const {
    showEditGroupModal,
    handleCloseEditGroupModal,
  } = useGroup();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: selectedGroup?.name,
      description: selectedGroup?.description,
    }
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: UpdateGroupParams) => {
      return GroupsService.update(data);
    },
  })

  const { mutateAsync: destroyGroup } = useMutation({
    mutationFn: async () => {
      return GroupsService.destroy(selectedGroup!.id);
    },
  })

  function onDeleteGroup() {
    handleCloseEditGroupModal();
    destroyGroup();
    queryClient.invalidateQueries({ queryKey: ['groups'] });
    queryClient.invalidateQueries({ queryKey: ['group'] });
    navigation.navigate('groups');
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await mutateAsync({
        id: selectedGroup!.id,
        ...data,
      });

      Toast.show({
        type: 'success',
        text1: 'Group',
        text2: response.message,
        visibilityTime: 2000,
        autoHide: true,
      })
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      queryClient.invalidateQueries({ queryKey: ['group'] });
      reset();
      handleCloseEditGroupModal();

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    }
  });


  return {
    onSubmit,
    handleSubmit,
    control,
    register,
    errors,
    isLoading,
    showEditGroupModal,
    handleCloseEditGroupModal,
    showDeleteContainer,
    toggleShowDeleteContainer,
    showConfirmDeletePopup,
    handleCloseConfirmDeletePopup,
    onDeleteGroup,
    handleOpenConfirmDeletePopup
  }
}
