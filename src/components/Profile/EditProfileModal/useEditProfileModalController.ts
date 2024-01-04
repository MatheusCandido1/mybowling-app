import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { UsersService } from "../../../services/userService";
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { UpdateUserParams } from '../../../services/userService/update';
import Toast from 'react-native-toast-message';
import { useProfile } from '../../../hooks/useProfile';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export function useEditProfileModalController() {
  const [image, setImage] = useState(undefined);

  const { updateLoggedUser, loggedUser } = useAuth();
  const { showUpdateProfileModal, handleCloseUpdateProfileModal} = useProfile();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: loggedUser?.name,
      email: loggedUser?.email,
    }
  });

  const { mutateAsync: updateUser, isLoading: isLoadingUserUpdate } = useMutation({
    mutationFn: async (data: UpdateUserParams) => {
      return UsersService.update(data);
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await updateUser(data);
      updateLoggedUser (response.data)
      handleCloseUpdateProfileModal();
      Toast.show({
        type: 'success',
        text1: 'User Updated',
        text2: 'Your user has been updated',
        visibilityTime: 2000,
        autoHide: true,
      })

    } catch (error) {
      const errorResponse = error?.response.data.error;

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorResponse ? errorResponse : 'Something went wrong',
        visibilityTime: 2000,
        autoHide: true,
      })
    }
  });


  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      return UsersService.avatar(data);
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    } else {
      const uri = result.assets[0]?.uri;
      setImage(uri);

      // Prepare the file for upload
      const localUri = uri;
      const filename = localUri.split('/').pop();

      if (filename) {
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image';

        const formData = new FormData();

        // @ts-ignore
        formData.append('file', { uri: localUri, name: filename, type });

        // Call the mutation and pass the FormData
        const response = await mutateAsync(formData);
        updateLoggedUser(response.data)
        Toast.show({
          type: 'success',
          text1: 'Avatar Updated',
          text2: 'Your avatar has been updated',
          visibilityTime: 2000,
          autoHide: true,
        })
      }
    }
  };

  return {
    pickImage,
    image,
    isLoading,
    onSubmit,
    handleSubmit,
    control,
    register,
    errors,
    isLoadingUserUpdate,
    showUpdateProfileModal,
    handleCloseUpdateProfileModal
  }
}
