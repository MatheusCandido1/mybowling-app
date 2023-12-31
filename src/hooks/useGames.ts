import { useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";

export function useGames() {
  return useContext(GamesContext);
}
