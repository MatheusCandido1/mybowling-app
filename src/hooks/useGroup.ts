import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";

export function useGroup() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['groups', 'getAll'],
    queryFn: GroupsService.getAll,
    staleTime: Infinity
  });

  return { groups: data ?? [], isFetching }
}


