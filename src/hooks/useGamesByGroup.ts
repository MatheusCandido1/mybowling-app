import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";

export function useGamesByGroup(id: number, page: number) {

  const { data, isLoading, refetch } = useQuery(
    ['gamesByGroup', 'games', id], () =>
    GroupsService.games(id, page),
    {
      staleTime: Infinity,
      keepPreviousData: true,

    },
  );



  return { games: data ?? [], isFetching: isLoading, refetch };
}
