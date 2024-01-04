import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";

export function useGroupShow(id: number) {

  const { data, isLoading } = useQuery(
    ['group', 'show', id], () =>
    GroupsService.show(id),
    {staleTime: Infinity}
  );

  const groupLocations = data?.locations ?? [];

  const groupMembers = data?.members ?? [];

  return { groupDetail: data ?? [], isFetchingDetails: isLoading, groupLocations, groupMembers };
}
