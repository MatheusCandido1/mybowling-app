import { useQuery } from "@tanstack/react-query";
import { GamesService } from "../services/gamesService";
import { GamesFilters } from "../services/gamesService/getAll";

export function useGamesGetAll(filters: GamesFilters) {
  const {
    data: games = [],
    isFetching: isFetchingGames,
    refetch: refetchGames
   } = useQuery({
    queryKey: ['games', 'getAll'],
    queryFn: () => GamesService.getAll(filters),
    staleTime: Infinity
  });

  return {
    games,
    isFetchingGames,
    refetchGames
   }
}
