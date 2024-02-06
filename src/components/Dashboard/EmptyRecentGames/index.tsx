import { useNavigation } from "@react-navigation/native";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";

export function EmptyRecentGames() {
  const navigation  = useNavigation();

  function handleNavigateToNewGame() {
    navigation.navigate('Game');
  }

  return (
    <Container>
      <InformationText>You still haven't played any games.</InformationText>
      <ActionButton
        onPress={handleNavigateToNewGame}
      >
        <ActionButtonText>Bowl now to improve your stats!</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
