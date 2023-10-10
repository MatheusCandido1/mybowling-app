import { Game } from "../Screens/Game";
import { NewGameModal } from "../components/Game/NewGameModal";
import { GameContext, GameProvider } from "../contexts/GameContext";

export function GameWrapper() {
  return (
    <GameProvider>
      <GameContext.Consumer>
      {({ currentFrame }) => (
        currentFrame ? <Game /> : <NewGameModal />
      )}
      </GameContext.Consumer>
    </GameProvider>
  )
}
