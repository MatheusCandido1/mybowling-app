import { Modal } from "react-native";
import { Container, Content, Header, Overlay, Title, InputContainer, InformationContainer, InformationText } from "./styles";
import { useAdditionalInformationModalController } from "./useAdditionalInformationModalController";
import { Controller } from "react-hook-form";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";

export function AdditionalInformationModal() {

  const {
    control,
    errors,
    states,
    cities,
    handleSubmit,
    onSubmit
  } = useAdditionalInformationModalController();

  return (
    <Modal
      visible={true}
      animationType="fade"
      transparent
    >
    <Overlay>
        <Container>
        <Header>
          <Title>Update Profile</Title>
        </Header>
          <Content>
          <InformationContainer>
              <InformationText>Share your city and state so we can improve your experience by adding all local bowling alleys, creating rankings and more! </InformationText>
              <InformationText>{"\n"}Thanks for helping us enhance your experience!</InformationText>
            </InformationContainer>

          <InputContainer>
            <Controller
              control={control}
              name="state"
              defaultValue=""
              render={({ field: { onChange, value }}) => (
                <SelectInput
                  label="Select State"
                  items={states}
                  onChange={onChange}
                  value={value}
                  error={errors.state?.message}
                />
              )}
            />
            </InputContainer>
          <InputContainer>
            <Controller
              control={control}
              name="city"
              defaultValue=""
              render={({ field: { onChange, value }}) => (
                <SelectInput
                  label="Select City"
                  items={cities}
                  onChange={onChange}
                  value={value}
                  error={errors.city?.message}
                  disabled={!cities.length}
                  initialLabel={!cities.length ? "Select a State first." : "Select an option."}
                />
              )}
            />
            </InputContainer>

            <MainButton
              style={{
                marginTop: 12
              }}
              onPress={handleSubmit(onSubmit)}
              label="Save"
            />
          </Content>
        </Container>

    </Overlay>
    </Modal>
  )
}
