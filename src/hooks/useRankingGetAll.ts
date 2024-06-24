import { useQuery } from "@tanstack/react-query";
import { RankingsService } from "../services/rankingsService";
import { GetAllRankingsParams } from "../services/rankingsService/getAll";

export function useRankingGetAll(params: GetAllRankingsParams) {
  const { data = [], isFetching, refetch, isRefetching } = useQuery(
    ['ranking', 'getAll'], () =>
      RankingsService.getAll(params),
    {
      staleTime: Infinity,
    },
  );

  return { rankings: data ?? [], isFetching, refetch, isRefetching }
}


