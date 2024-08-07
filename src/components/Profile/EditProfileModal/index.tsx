import { Button, Modal, TouchableOpacity, View } from "react-native";
import { AvatarContainer, ButtonContainer, Container, Content, Header, Overlay, Title, AvatarButton } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../../../hooks/useAuth";
import { Avatar } from "../../Shared/Avatar";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { useEditProfileModalController } from "./useEditProfileModalController";
import { OverlayLoading } from "../../Shared/OverlayLoading";
import { Controller } from 'react-hook-form';
import { useProfile } from "../../../hooks/useProfile";
import { SelectInput } from "../../Shared/Forms/SelectInput";


export function EditProfileModal() {

  const { loggedUser } = useAuth();

  const {
    pickImage,
    image,
    isLoading,
    control,
    onSubmit,
    handleSubmit,
    register,
    errors,
    isLoadingUserUpdate,
    showUpdateProfileModal,
    handleCloseUpdateProfileModal,
    states,
    cities,
    cityRef,
    stateRef
  } = useEditProfileModalController();

  return (
    <Modal
      visible={showUpdateProfileModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Edit Profile</Title>
            <TouchableOpacity onPress={handleCloseUpdateProfileModal}>
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Content>
            <AvatarContainer>
              <AvatarButton
                onPress={pickImage}
              >
                <MaterialCommunityIcons name="camera" size={24} color="#fff" />
              </AvatarButton>
              <Avatar
                size={135}
                imageUri={image || loggedUser?.avatar}
              />
            </AvatarContainer>
            <Controller
             name="name"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Name"}
                 icon={"user"}
                 value={value}
                 onChangeText={onChange}
               />
             )}
            />
            <Controller
             name="email"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Email"}
                 icon={"envelope"}
                 value={value}
                 onChangeText={onChange}
               />
             )}
           />
           <Controller
             control={control}
             name="state"
             defaultValue=""
             render={({ field: { onChange, value }}) => (
               <SelectInput
                 label="State"
                 items={states}
                 onChange={onChange}
                 value={value}
                 error={errors.state?.message}
                 selectRef={stateRef}
               />
             )}
           />

          <Controller
             control={control}
             name="city"
             defaultValue=""
             render={({ field: { onChange, value }}) => (
               <SelectInput
                 label="City"
                 items={cities}
                 onChange={onChange}
                 value={value}
                 error={errors.city?.message}
                 selectRef={cityRef}
               />
             )}
           />

            <ButtonContainer>
              <MainButton
                label="Save"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoadingUserUpdate}
              />
            </ButtonContainer>
          </Content>
          </Container>
          </Overlay>
        </Modal>
  );
}
