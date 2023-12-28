import { Header } from "../../components/Shared/Header";
import { Container, Content } from "./styles";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { NewBallModal } from "../../components/Arsenal/NewBallModal";
import { useArsenalController } from "./useArsenalController";

export function Arsenal() {
  const { showNewBallModal } = useArsenalController();

  return (
    <Container>
      <Header title="Arsenal" />
      <Content>

      </Content>

      { showNewBallModal ? <NewBallModal /> : null}
    </Container>
  )
}
