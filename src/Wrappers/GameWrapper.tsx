import React from "react";
import { Game } from "../Screens/Game";
import { GameProvider } from "../contexts/GameContext";

export function GameWrapper() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}
