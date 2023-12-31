import { Games } from "../Screens/Games";
import { GamesProvider } from "../contexts/GamesContext";

export function GamesWrapper() {
  return (
    <GamesProvider>
      <Games />
    </GamesProvider>
  )
}
