import { Container, Content, Header, Overlay, Title, InputContainer, InformationContainer, InformationText } from "./styles";
import { useAdditionalInformationModalController } from "./useAdditionalInformationModalController";
import { Controller } from "react-hook-form";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { Modal, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function AdditionalInformationModal() {

  const {
    control,
    errors,
    states,
    cities,
    handleSubmit,
    onSubmit,
    isLoadingUserUpdate,
    handleCloseAdditionalInformationModal,
    showAdditionalInformationModal,
    cityRef,
    stateRef
  } = useAdditionalInformationModalController();

  return (
    <Modal
      visible={showAdditionalInformationModal}
      animationType="fade"
      transparent
    >
    <Overlay>
        <Container>
        <Header>
          <Title>Update Profile</Title>
          <TouchableOpacity onPress={handleCloseAdditionalInformationModal}>
            <MaterialCommunityIcons name="close" size={32} color="#000" />
          </TouchableOpacity>
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
                  selectRef={stateRef}
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
                  selectRef={cityRef}
                />
              )}
            />
            </InputContainer>

            <MainButton
              style={{
                marginTop: 12
              }}
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoadingUserUpdate}
              label="Save"
            />
          </Content>
        </Container>

    </Overlay>
    </Modal>
  )
}
