import { useEffect, useState, useCallback } from 'react';
import { useRanking } from '../../hooks/useRanking';
import { useRankingGetAll } from '../../hooks/useRankingGetAll';
import { GetAllRankingsParams } from '../../services/rankingsService/getAll';

export function useRankingController() {
  const { showGameDetails, handleShowGameDetails } = useRanking();

  const [params, setParams] = useState<GetAllRankingsParams>({
    period: 'Week',
  });

  const getOptionStyle = useCallback((option: string) => {
    return {
      backgroundColor: params.period === option ? '#0d9488' : '#b6dedb',
      textColor: params.period === option ? '#FFF' : '#085e56',
    };
  }, [params.period]);

  const { rankings, isFetching, refetch, isRefetching } = useRankingGetAll({ period: params.period });

  const isLoading = isFetching || isRefetching;

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  const handleRankingPeriod = useCallback((option: string) => {
    if (params.period === option) {
      return; // If the selected period is already the current period, do nothing.
    }
    setParams((prevParams) => ({
      ...prevParams,
      period: option,
    }));
  }, [params]);

  return {
    period: params.period,
    handleRankingPeriod,
    getOptionStyle,
    rankings,
    isLoading,
    showGameDetails,
    handleShowGameDetails,
  };
}
