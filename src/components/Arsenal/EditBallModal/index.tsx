import { Modal, TouchableOpacity, View } from "react-native";
import { Container, Content, DeleteBallButton, Header, InputContainer, Overlay, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { useEditBallModalController } from "./useEditBallModalController";
import { ColorInput } from "../../Shared/Forms/ColorInput";
import { Controller } from "react-hook-form";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { TextInputWithLabel } from "../../Shared/Forms/TextInputWithLabel";
import { SelectValueInput } from "../../Shared/Forms/SelectValueInput";
import { ConfirmPopup } from "../../Shared/ConfirmPopup";

export function EditBallModal() {
  const  {
    weights,
    onSubmit,
    handleSubmit,
    control,
    errors,
    showEditBallModal,
    handleCloseEditBallModal,
    isUpdatingBall,
    showConfirmDeletePopup,
    handleOpenConfirmDeletePopup,
    handleCloseConfirmDeletePopup,
    handleDeleteBall
  } = useEditBallModalController();



  return (
    <Modal
    visible={showEditBallModal}
    animationType="fade"
    transparent
    >
      <Overlay>
        <Container>
          <Header>
            <View style={{flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center'}}>
              <Title>Edit Ball</Title>
              <DeleteBallButton onPress={handleOpenConfirmDeletePopup}>
                <MaterialCommunityIcons name="delete" size={24} color="#FFF"  />
              </DeleteBallButton>
            </View>

            <TouchableOpacity
              onPress={ handleCloseEditBallModal}
            >
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Content>



          <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ field: { onChange, value }}) => (
              <TextInputWithLabel
                label="Ball name/brand"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

        <InputContainer style={{marginTop: 16}}>
        <Controller
          control={control}
          name="weight"
          render={({ field: { onChange, value }}) => (
            <SelectValueInput
              label="Select the weight (lbs)"
              items={weights}
              onChange={onChange}
              value={value}
              error={errors.weight?.message}
            />
          )}
        />
        </InputContainer>
        <Controller
          control={control}
          name="color"
          defaultValue="#0d9488"
          render={({ field: { onChange, value }}) => (
            <ColorInput
              label="Select the color"
              onChange={onChange}
              value={value}
            />
          )}
        />

        <InputContainer style={{marginTop: 8}}>
        <MainButton
          onPress={handleSubmit(onSubmit)}
          label="Save Ball"
          isLoading={isUpdatingBall}
        />
        </InputContainer>

          </Content>

        </Container>
      </Overlay>
      <ConfirmPopup
        showConfirmPopup={showConfirmDeletePopup}
        handleCloseConfirmPopup={handleCloseConfirmDeletePopup}
        handleConfirm={handleDeleteBall}
        title="Delete Ball"
        text="Are you sure you want to delete this ball?"
      />
    </Modal>
  )

}
