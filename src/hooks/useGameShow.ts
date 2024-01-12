import { useQuery } from "@tanstack/react-query";
import { GamesService } from "../services/gamesService";

export function useGameShow(id: number) {
  const { data, isLoading } = useQuery(
    ['gameShow', 'games', id], () => GamesService.show(id),
    {
      staleTime: Infinity,
    },
  );

  return { game: data ?? [], isFetchingGame: isLoading };
}
