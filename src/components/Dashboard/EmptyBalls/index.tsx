import { useNavigation } from "@react-navigation/native";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";

export function EmptyBalls() {

  const navigation  = useNavigation();

  function handleNavigateToCreateBall() {
    navigation.navigate('Arsenal');
  }

  return (
    <Container>
      <InformationText>You still haven't created any balls.</InformationText>
      <ActionButton
        onPress={handleNavigateToCreateBall}
      >
        <ActionButtonText>Add balls to your arsenal!</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
