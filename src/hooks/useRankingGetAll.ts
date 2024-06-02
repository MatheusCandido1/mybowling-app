import { useQuery } from "@tanstack/react-query";
import { RankingsService } from "../services/rankingsService";
import { useMemo } from "react";

export function useRankingGetAll() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['ranking', 'getAll'],
    queryFn: RankingsService.getAll,
    staleTime: Infinity,
  });


  return { rankings: data ?? [], isFetching}
}


