import { useNavigation } from "@react-navigation/native";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";

export function EmptySplits() {

  const navigation  = useNavigation();

  function handleNavigateToCreateBall() {
    navigation.navigate('Game');
  }

  return (
    <Container>
      <InformationText>You still haven't face any splits on your games.</InformationText>
      <ActionButton
        onPress={handleNavigateToCreateBall}
      >
        <ActionButtonText>Play more games!</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
