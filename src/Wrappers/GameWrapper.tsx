import { useState } from "react";
import { Game } from "../Screens/Game";
import { GameContext, GameProvider } from "../contexts/GameContext";
import { GameModal } from "../components/Game/GameModal";

export function GameWrapper() {

  return (
    <GameProvider>
      <GameContext.Consumer>
        {({ currentGame }) => (
           currentGame ? (
            <Game />
          ): (
            <GameModal />
          )
        )}
      </GameContext.Consumer>
    </GameProvider>
  )
}
