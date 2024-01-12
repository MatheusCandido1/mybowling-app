import { useQuery } from "@tanstack/react-query";
import { GamesService } from "../services/gamesService";

export function useOnGoingGames() {

  const { data: onGoingGames = [], isFetching: isFetchingOnOoingGames } = useQuery({
    queryKey: ['games', 'ongoing'],
    queryFn: () => GamesService.ongoing(),
    staleTime: Infinity
  });


  return {
    onGoingGames,
    isFetchingOnOoingGames
   }
}
