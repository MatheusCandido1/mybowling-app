import { Modal, TouchableOpacity, View, Text} from "react-native";
import { Container, Content, Header, InputContainer, Overlay, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNewBallModalController } from "./useNewBallModalController";
import { ColorInput } from "../../Shared/Forms/ColorInput";
import { Controller } from "react-hook-form";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { TextInputWithLabel } from "../../Shared/Forms/TextInputWithLabel";
import { SelectValueInput } from "../../Shared/Forms/SelectValueInput";


export function NewBallModal() {
  const  {
    weights,
    onSubmit,
    handleSubmit,
    control,
    errors,
    showNewBallModal,
    handleCloseNewBallModal
  } = useNewBallModalController();

  return (
    <Modal
      visible={showNewBallModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>New Ball</Title>
            <TouchableOpacity
              onPress={ handleCloseNewBallModal}
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

        <InputContainer style={{marginTop: 16}}>
        <MainButton
          onPress={handleSubmit(onSubmit)}
          label="Save Ball"
        />
        </InputContainer>

          </Content>

        </Container>
      </Overlay>
    </Modal>
  )

}
