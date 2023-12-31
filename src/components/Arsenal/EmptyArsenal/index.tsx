import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";
import { useArsenal } from "../../../hooks/useArsenal";

export function EmptyArsenal() {

  const {
    handleShowNewBallModal,
  } = useArsenal();

  return (
    <Container>
      <InformationText>You have no balls recorded. </InformationText>
      <ActionButton
        onPress={handleShowNewBallModal}
      >
        <ActionButtonText>Create a new ball!</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
