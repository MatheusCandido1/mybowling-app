import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";

export function useGroupDetails(id: number) {
  const { data, isLoading } = useQuery(
    ['groups', 'show', id], () =>
    GroupsService.show(id),
    {staleTime: Infinity}
  );

  return { groupDetail: data ?? [], isFetching: isLoading };
}
