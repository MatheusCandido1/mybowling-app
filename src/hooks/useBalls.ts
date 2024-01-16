import { useQuery } from "@tanstack/react-query";
import { BallsService } from "../services/ballsService";

export function useBalls() {
  const { data = [], isFetching, refetch } = useQuery({
    queryKey: ['balls', 'getAll'],
    queryFn: BallsService.getAll,
    staleTime: Infinity
  });

  return { balls: data ?? [], isFetching, refetch }
}
