import { useQuery } from "@tanstack/react-query";
import { GamesService } from "../services/gamesService";
import { GamesFilters } from "../services/gamesService/getAll";

export function useGames(filters: GamesFilters) {
  const { data = [], isFetching } = useQuery({
    queryKey: ['games', 'getAll'],
    queryFn: () => GamesService.getAll(filters),
    staleTime: Infinity
  });

  return { games: data ?? [], isFetching }
}
