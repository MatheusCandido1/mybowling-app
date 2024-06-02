import { createContext, useCallback, useEffect, useState } from "react";

interface RankingContextData {
  rankingType: string;
  handleSetRankingType(type: string): void;
  rankingPeriod: string;
  handleSetRakingPeriod(period: string): void;
}

export const RankingContext = createContext({} as RankingContextData);

export function RankingProvider({children}: {children: React.ReactNode}) {

  const [rankingType, setRankingType] = useState('Score');
  const [rankingPeriod, setRankingPeriod] = useState('Week');

  function handleSetRankingType(type: string) {
    setRankingType(type);
  }

  function handleSetRakingPeriod(period: string) {
    setRankingPeriod(period);
  }

  return (
    <RankingContext.Provider value={{
      rankingType,
      handleSetRankingType,
      rankingPeriod,
      handleSetRakingPeriod
    }}>
      {children}
    </RankingContext.Provider>
  )
}

