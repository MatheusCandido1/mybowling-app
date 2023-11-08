import { TouchableOpacity } from "react-native";
import { Container, Overlay, Header, Title, Form, InputContainer } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { DateInput } from "../../Shared/Forms/DateInput/DateInput";
import { useNavigation } from "@react-navigation/native";
import { useNewGameController } from "./useNewGameController";
import { OverlayLoading } from "../../Shared/OverlayLoading";
import { Controller } from "react-hook-form";

export function NewGameModal() {
  const navigation = useNavigation();

  const {
    locations,
    isFetchingLocations,
    onSubmit,
    handleSubmit,
    control,
    errors,
    isCreatingGame
  } = useNewGameController();

  const isLoadingResources = isFetchingLocations;

  function handleCloseModal() {
    // navigation.navigate('Games')
  }

  return (
      <Overlay>
      {isLoadingResources && <OverlayLoading />}
      {!isLoadingResources && (
        <Container>
        <Header>
          <Title>
            New Game
          </Title>
          <TouchableOpacity
            onPress={handleCloseModal}
          >
            <MaterialCommunityIcons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </Header>
        <Form>
          <InputContainer>

          <Controller
            control={control}
            name="game_date"
            defaultValue={new Date()}
            render={({ field: { onChange, value }}) => (
              <DateInput
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
            defaultValue={undefined}
            render={({ field: { onChange, value }}) => (
              <SelectInput
                label="Select the Location"
                items={locations}
                onChange={onChange}
                value={value}
                error={errors.location_id?.message}
              />
            )}
          />
          </InputContainer>
          <InputContainer>
          <Controller
            name="ball_id"
            control={control}
            render={({ field: { onChange, value }}) => (
              <BallSelectInput
                label="Select the ball"
                onChange={onChange}
                value={value}
                error={errors.ball_id?.message}
              />
             )}
            />
          </InputContainer>
          <InputContainer
            style={{
              marginTop: -8
            }}
          >
            <MainButton
              onPress={handleSubmit(onSubmit)}
              isLoading={isCreatingGame}
              label="Start Game"
            />
          </InputContainer>
        </Form>
        </Container>
      )}
      </Overlay>
  )
}
