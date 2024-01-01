import { Modal, TouchableOpacity } from "react-native";
import { Container, Content, Header, Overlay, Title, Form, ImageSelectorText, ImageSelector } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { Controller } from 'react-hook-form';
import { useNewGroupModalController } from "./useNewGroupModalController";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";
import { NewGroupModalHeight } from "../../../utils/modalHeightByDevice";

export function NewGroupModal() {

  const { register, handleSubmit, onSubmit, control, isLoading, showNewGroupModal, handleCloseNewGroupModal } = useNewGroupModalController();


  const ModalHeight = NewGroupModalHeight()?.dimension;

  return (
    <Modal
    visible={showNewGroupModal}
    animationType="fade"
    transparent
    >
      <Overlay>
        <Container
          style={{
            marginTop: ModalHeight
          }}
        >
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
              <ImageSelector>
                <ImageSelectorText>Choose an Image</ImageSelectorText>
              </ImageSelector>
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
