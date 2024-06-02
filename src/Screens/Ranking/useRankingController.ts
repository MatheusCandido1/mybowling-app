import { useRanking } from '../../hooks/useRanking';
import { useRankingGetAll } from '../../hooks/useRankingGetAll';

export function useRankingController() {

  const {
    rankingPeriod,
    handleSetRakingPeriod
  } = useRanking();


  function getOptionStyle(option: string) {
    return {
      backgroundColor: rankingPeriod === option ? '#0d9488' : '#b6dedb',
      textColor: rankingPeriod === option ? '#FFF' : '#085e56',
    }
  }


  const {
    rankings,
    isFetching,
  } = useRankingGetAll();

  console.log('rankings', rankings)

  return {
    rankingPeriod,
    handleSetRakingPeriod,
    getOptionStyle,
    rankings,
    isFetching
  }
}
