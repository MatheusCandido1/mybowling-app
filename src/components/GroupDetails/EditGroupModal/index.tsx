import { Modal, TouchableOpacity } from "react-native";
import { Container, Content, DeleteButton, DeleteButtonText, DeleteGroupContainer, DeleteGroupLink, DeleteGroupText, DeleteGroupTitle, Form, Header, Overlay, Title} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEditGroupModalController } from "./useEditGroupModalController";
import { Controller } from "react-hook-form";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { ConfirmPopup } from "../../Shared/ConfirmPopup";

export function EditGroupModal() {
  const {
    handleSubmit,
    onSubmit,
    control,
    isLoading,
    showEditGroupModal,
    showDeleteContainer,
    handleCloseEditGroupModal,
    toggleShowDeleteContainer,
    showConfirmDeletePopup,
    handleCloseConfirmDeletePopup,
    onDeleteGroup,
    handleOpenConfirmDeletePopup

  } = useEditGroupModalController();

  return (
    <Modal
      visible={showEditGroupModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Edit Group</Title>
            <TouchableOpacity onPress={handleCloseEditGroupModal}>
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
                label="Update Group"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />

            </Form>

            <DeleteGroupContainer>
              <DeleteGroupLink
                onPress={toggleShowDeleteContainer}
              >
                <DeleteGroupTitle>
                Delete Group?
                </DeleteGroupTitle>
              </DeleteGroupLink>
              {showDeleteContainer && (
                  <>
                  <DeleteGroupText>
                    Are you sure you want to delete this group? This action cannot be undone.
                  </DeleteGroupText>
                  <DeleteButton
                    onPress={handleOpenConfirmDeletePopup}
                  >
                    <DeleteButtonText>Yes, delete</DeleteButtonText>
                  </DeleteButton>
                </>

              )}

            </DeleteGroupContainer>
          </Content>
        </Container>
      </Overlay>

      <ConfirmPopup
        showConfirmPopup={showConfirmDeletePopup}
        handleCloseConfirmPopup={handleCloseConfirmDeletePopup}
        handleConfirm={onDeleteGroup}
        title="Delete Group"
        text="Are you sure you want to delete this group? The stats of the group will be deleted as well, but the games will remain."
      />

    </Modal>
  )
}
