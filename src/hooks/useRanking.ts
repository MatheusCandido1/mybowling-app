import { useContext } from "react";
import { RankingContext } from "../contexts/RankingContext";

export function useRanking() {
  return useContext(RankingContext);
}
