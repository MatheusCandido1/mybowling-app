// import { Game } from "../Screens/Game";
import { NewGameModal } from "../components/Game/NewGameModal";
import { GameProvider } from "../contexts/GameContext";

export function GameWrapper() {
  return (
    <GameProvider>
      <NewGameModal />
    </GameProvider>
  )
}
