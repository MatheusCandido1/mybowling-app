import { zodResolver } from "@hookform/resolvers/zod";
import { useDashboard } from "../../../hooks/useDashboard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Location } from "../../../utils/locationHelper";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { UsersService } from "../../../services/userService";
import { UpdateUserParams } from "../../../services/userService/update";
import Toast from 'react-native-toast-message';
import { useAuth } from "../../../hooks/useAuth";

const schema = z.object({
  state: z.string({ required_error: 'State is required' }).nonempty({ message: 'State is required' }),
  city: z.string({ required_error: 'City is required' }).nonempty({ message: 'City is required' }),
});


type FormData = z.infer<typeof schema>;

export function useAdditionalInformationModalController() {

  const {
    loggedUser,
    updateLoggedUser,
  } = useAuth();

  const [cities, setCities] = useState<string[]>([]);
  const states = Object.keys(Location)
  .map((state) => ({
    id: state,
    name: state
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const stateValue = watch('state');

  useEffect(() => {
    if (stateValue) {
      const cities = Location[stateValue];
      setCities(cities.map((city, index) => ({
        id: city,
        name: city
      })).sort((a, b) => a.name.localeCompare(b.name)
      ));
    }
  }, [stateValue]);

  const { mutateAsync: updateUser, isLoading: isLoadingUserUpdate } = useMutation({
    mutationFn: async (data: UpdateUserParams) => {
      return UsersService.update(data);
    },
  })



  const onSubmit = handleSubmit(async (data) => {
    try {
      const payload = {
        ...data,
        name: loggedUser!.name,
        email: loggedUser!.email,
      }

      const response = await updateUser(payload);
      updateLoggedUser (response.data)

      handleCloseAdditionalInformationModal();
      Toast.show({
        type: 'success',
        text1: 'User Updated',
        text2: 'Your user has been updated',
        visibilityTime: 2000,
        autoHide: true,
      })
    }
    catch (error) {

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

  const {
    handleCloseAdditionalInformationModal,
  } = useDashboard();

  return {
    control,
    register,
    errors,
    handleSubmit,
    onSubmit,
    states,
    cities,
  }
}
