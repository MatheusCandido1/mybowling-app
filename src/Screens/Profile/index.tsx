import { Text } from "react-native";
import { Header } from "../../components/Shared/Header";
import { Container } from "./styles";
import { Game } from "../Game";
import { GameProvider } from "../../contexts/GameContext";
import { NewGameModal } from "../../components/Game/NewGameModal";

export function Profile() {
  return (
    <Container>
      <NewGameModal />
    </Container>
  )
}
