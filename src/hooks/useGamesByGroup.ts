import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";
import { GamesByGroupFilters } from "../services/groupsService/games";

export function useGamesByGroup(id: number, filters: GamesByGroupFilters) {


  const { data, isLoading, refetch } = useQuery(
    ['gamesByGroup', 'games', id], () =>
    GroupsService.games(id, filters),
    {
      staleTime: Infinity,
    },
  );

  return { gamesByGroup: data ?? [], isFetchingGames: isLoading, refetch };
}
