import { Modal, TouchableOpacity } from "react-native";
import { ButtonContainer, Container, Content, Header, Overlay, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../../../hooks/useAuth";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { useUpdatePasswordModalController } from "./useUpdatePasswordModalController";
import { Controller } from 'react-hook-form';

export function UpdatePasswordModal() {

  const {
    isLoading,
    control,
    onSubmit,
    handleSubmit,
    errors,
    showUpdatePasswordModal,
    handleCloseUpdatePasswordModal
  } = useUpdatePasswordModalController();

  return (
    <Modal
      visible={showUpdatePasswordModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Update Password</Title>
            <TouchableOpacity onPress={handleCloseUpdatePasswordModal}>
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Content>
            <Controller
             name="currentPassword"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Current Password"}
                 icon={"lock"}
                 value={value}
                 onChangeText={onChange}
                 isPassword
                 error={errors.currentPassword?.message}
               />
             )}
            />
            <Controller
             name="newPassword"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"New Password"}
                 icon={"lock"}
                 value={value}
                 onChangeText={onChange}
                 isPassword
                 error={errors.newPassword?.message}
               />
             )}
           />
           <Controller
             name="newPasswordConfirmation"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Confirm New Password"}
                 icon={"lock"}
                 value={value}
                 onChangeText={onChange}
                 isPassword
                 error={errors.newPasswordConfirmation?.message}
               />
             )}
           />
            <ButtonContainer>
              <MainButton
                label="Save"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />
            </ButtonContainer>
          </Content>
          </Container>
          </Overlay>
        </Modal>
  );
}
