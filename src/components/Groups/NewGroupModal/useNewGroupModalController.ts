import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GroupsService } from "../../../services/groupsService";
import { CreateGroupParams } from "../../../services/groupsService/create";
import Toast from 'react-native-toast-message';
import { useState } from "react";
import { useGroups } from "../../../hooks/useGroups";

const schema = z.object({
  name: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

export function useNewGroupModalController() {
  const {showNewGroupModal, handleCloseNewGroupModal } = useGroups();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: CreateGroupParams) => {
      return GroupsService.create(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const group = await mutateAsync(data);
      Toast.show({
        type: 'success',
        text1: 'New Group',
        text2: group.message,
        visibilityTime: 2000,
        autoHide: true,
      })
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      reset();
      handleCloseNewGroupModal();

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

  return { onSubmit, handleSubmit, control, register, errors, isLoading, showNewGroupModal, handleCloseNewGroupModal }
}
