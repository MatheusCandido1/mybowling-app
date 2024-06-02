import { Ranking } from "../Screens/Ranking";
import { RankingProvider } from "../contexts/RankingContext";

export function RankingWrapper() {
  return (
    <RankingProvider>
      <Ranking />
    </RankingProvider>
  )
}
