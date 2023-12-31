import { useNavigation } from "@react-navigation/native";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";
import { useGames } from "../../../hooks/useGames";

export function EmptyGames() {

  const navigation  = useNavigation();

  const { handleResetFilters } = useGames();

  function handleNavigateToCreateBall() {
    navigation.navigate('Game');
  }

  return (
    <Container>
      <InformationText>You have no games recorded. </InformationText>
      <ActionButton
        onPress={handleNavigateToCreateBall}
      >
        <ActionButtonText>Start a new game</ActionButtonText>
      </ActionButton>
      <InformationText
        style={{marginTop: 8}}>Or </InformationText>
      <ActionButton onPress={handleResetFilters}>
        <ActionButtonText>Clear the filters</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
