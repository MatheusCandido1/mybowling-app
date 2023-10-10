import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, Overlay, Header, Title, Form, InputContainer } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { ILocation } from "../../../entities/Location";
import { DateInput } from "../../Shared/Forms/DateInput/DateInput";
import { IBall } from "../../../entities/Ball";
import { useNavigation } from "@react-navigation/native";
import { useGame } from "../../../hooks/useGame";


export function NewGameModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBall, setSelectedBall] = useState<IBall | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(null);
  const [date, setDate] = useState(new Date());

  const [selectedBallError, setSelectedBallError] = useState("");
  const [selectedLocationError, setSelectedLocationError] = useState("");

  const { startNewGame } = useGame();

  const navigation = useNavigation();

  const checkError = selectedBallError || selectedLocationError;

  function validateForm() {
    if(!selectedBall) {
      setSelectedBallError("Please select a ball");
    }
    if(!selectedLocation) {
      setSelectedLocationError("Please select a location");
    }
  }

  const handleNewGame = () => {
    setIsLoading(true);
    setTimeout(() => {
      validateForm();
      setIsLoading(false);
      if(!checkError) {
        startNewGame();
      }
    }, 1000);
  }

  function resetForm() {
    setIsLoading(false);
  }

  const locations: Array<ILocation> = [
    {
      id: "1",
      name: "South Point Bowling Center",
    },
    {
      id: "2",
      name: "Sunset Station Bowling Center",
    },
    {
      id: "3",
      name: "Orleans Bowling Center",
    },
    {
      id: "4",
      name: "Gold Coaster Bowling Center",
    },
  ]

  function handleCloseModal() {
    navigation.navigate('Games')
  }

  return (
    <Overlay>
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
            <DateInput />
          </InputContainer>

          <InputContainer
            style={{
              marginTop: 20
            }}
          >
            <SelectInput
              label="Select the Location"
              items={locations}
              error={selectedLocationError}
            />
          </InputContainer>

          <InputContainer>
            <BallSelectInput
              label="Select the ball"
              resetForm={resetForm}
              error={selectedBallError}
            />
          </InputContainer>
          <InputContainer>
            <MainButton
              onPress={handleNewGame}
              isLoading={isLoading}
              label="Start Game"
            />
          </InputContainer>
        </Form>
      </Container>
    </Overlay>
  )
}
