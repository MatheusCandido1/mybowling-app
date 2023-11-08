import { Header } from "../../components/Shared/Header";
import { Container } from "./styles";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";

export function Equipments() {
  return (
    <Container>
      <Header title="Equipments" />
      <OverlayLoading />
    </Container>
  )
}
