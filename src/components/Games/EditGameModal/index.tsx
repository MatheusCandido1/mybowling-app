import { Modal, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Header, Overlay, Content, Title, InputContainer, FrameButtonText, FrameButton, Footer } from "./styles";
import { useEditGameModalController } from "./useEditGameModalController";
import { Controller } from "react-hook-form";
import { DateInput } from "../../Shared/Forms/DateInput";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { PinIcon } from "../../Icons/PinIcon";


export function EditGameModal() {
  const {
    showEditModal,
    handleCloseEditModal,
    locations,
    isFetchingLocations,
    onSubmit,
    handleSubmit,
    control,
    errors,
    groups,
    shouldEnableGroups,
  } = useEditGameModalController();

  return (
    <Modal
      visible={showEditModal}
      animationType="slide"
      transparent
      >
        <Overlay>
          <Container>
            <Header>
              <Title>Edit Game</Title>
              <TouchableOpacity
                onPress={ handleCloseEditModal}
              >
                <MaterialCommunityIcons name="close" size={32} color="#000" />
              </TouchableOpacity>
            </Header>
            <Content>
            <InputContainer>
              <Controller
                control={control}
                name="game_date"
                defaultValue={new Date()}
                render={({ field: { onChange, value }}) => (
                  <DateInput
                    label="Game date"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </InputContainer>
            <InputContainer
                style={{
                  marginTop: 20
                }}
              >
              <Controller
                control={control}
                name="location_id"
                defaultValue=""
                render={({ field: { onChange, value }}) => (
                  <SelectInput
                    label="Select location"
                    items={locations}
                    onChange={onChange}
                    value={value}
                    error={errors.location_id?.message}
                    searchPlaceholder={"Type the name of the bowling alley"}
                  />
                )}
              />
            </InputContainer>
                <InputContainer>
                <Controller
                  control={control}
                  name="group_id"
                  defaultValue=""
                  render={({ field: { onChange, value }}) => (
                    <SelectInput
                      label="Select the group (optional)"
                      items={groups}
                      onChange={onChange}
                      value={value}
                      error={errors.group_id?.message}
                      searchPlaceholder={"Type the name of the group"}
                    />
                  )}
                />
                </InputContainer>

            <InputContainer>
              <Controller
              name="ball_id"
              control={control}
              defaultValue={""}
              render={({ field: { onChange, value }}) => (
                <BallSelectInput
                  label="Select ball"
                  onChange={onChange}
                  value={value}
                  error={errors.ball_id?.message}
                />
                )}
              />
            </InputContainer>
            <FrameButton>
              <FrameButtonText>Edit Frames</FrameButtonText>
              <PinIcon
                color={"#FFF"}
                height={24}
                width={24}
              />
            </FrameButton>

            <MainButton
              style={{
                marginTop: 12
              }}
              onPress={handleSubmit(onSubmit)}
              label="Update Game"
            />

            </Content>
          </Container>
        </Overlay>
      </Modal>
  )
}
