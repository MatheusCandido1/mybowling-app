import { Modal, TouchableOpacity } from "react-native";
import { Container, Content, Header, Overlay, Title, Form, ImageSelectorText, ImageSelector } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { Controller } from 'react-hook-form';
import { useNewGroupModalController } from "./useNewGroupModalController";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";

export function NewGroupModal() {

  const { handleSubmit, onSubmit, control, isLoading, showNewGroupModal, handleCloseNewGroupModal } = useNewGroupModalController();


  return (
    <Modal
    visible={showNewGroupModal}
    animationType="fade"
    transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>New Group</Title>
            <TouchableOpacity
              onPress={handleCloseNewGroupModal}
            >
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>

          <Content>
            <Form>
              <Controller
              name="name"
              control={control}
              defaultValue={""}
              render={({ field: { onChange, value }}) => (
                <CustomTextInput
                  label={"Group name"}
                  icon={"navicon"}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              />
              <Controller
              name="description"
              control={control}
              defaultValue={""}
              render={({ field: { onChange, value }}) => (
                <CustomTextInput
                  label={"Description"}
                  icon={"navicon"}
                  value={value}
                  onChangeText={onChange}
                  multiline
                  lines={5}
                />
              )}
              />
              <MainButton
                label="Create Group"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />

            </Form>
          </Content>

        </Container>
      </Overlay>
    </Modal>
  )
}
