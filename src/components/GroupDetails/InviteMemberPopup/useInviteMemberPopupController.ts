import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { GroupsService } from "../../../services/groupsService";
import { useState } from "react";
import { useGroup } from "../../../hooks/useGroup";

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export function useInviteMemberPopupController() {

  const { selectedGroup } = useGroup();

  const [feedback, setFeedback] = useState<string>('');

  function handleResetFeedback() {
    setFeedback('');
  }

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: any) => {
      return GroupsService.invite(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        group_id: selectedGroup!.id,
      });

      setFeedback('SUCCESS');
      reset();

    } catch (error) {
      const errorResponse = error?.response.data.message;

      if(errorResponse === 'Invite already sent') {
        setFeedback('ERRORSENT');
        return;
      }

      if(errorResponse === 'User not found') {
        setFeedback('ERRORUSERNOTFOUND');
        return;
      }

      if(errorResponse === 'User is already a member') {
        setFeedback('ERRORUSERALREADYINGROUP');
        return;
      }



    }
  });


  return { onSubmit, handleSubmit, control, register, errors, isLoading, feedback, handleResetFeedback, reset }
}
