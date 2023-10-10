import { Games } from "../Screens/Games";
import { GameProvider } from "../contexts/GameContext";

export function GamesWrapper() {
  return (
    <GameProvider>
      <Games />
    </GameProvider>
  )
}
