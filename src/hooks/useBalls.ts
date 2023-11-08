import { useQuery } from "@tanstack/react-query";
import { BallsService } from "../services/ballsService";

export function useBalls() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['balls', 'getAll'],
    queryFn: BallsService.getAll,
    staleTime: Infinity
  });

  return { balls: data ?? [], isFetching }
}
