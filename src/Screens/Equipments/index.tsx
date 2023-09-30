import { Header } from "../../components/Header";
import { Container } from "./styles";
import { OverlayLoading } from "../../components/OverlayLoading";

export function Equipments() {
  return (
    <Container>
      <Header title="Equipments" />
      <OverlayLoading />
    </Container>
  )
}
