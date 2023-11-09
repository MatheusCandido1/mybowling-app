import { Header } from "../../components/Shared/Header";
import { Container } from "./styles";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";

export function Arsenal() {
  return (
    <Container>
      <Header title="Arsenal" />
      <OverlayLoading />
    </Container>
  )
}
