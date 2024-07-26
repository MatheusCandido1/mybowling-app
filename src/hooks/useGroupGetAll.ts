import { useQuery } from "@tanstack/react-query";
import { GroupsService } from "../services/groupsService";
import { useMemo } from "react";

export function useGroupGetAll() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['groups', 'getAll'],
    queryFn: GroupsService.getAll,
    staleTime: Infinity,
  });



  const invites = useMemo(() => {
    return data.filter(group => group.is_active === 0);
  }, [data]);

  const groups = useMemo(() => {
    return data.filter(group => group.is_active === 1)
  }, [data]);


  return { groups: groups ?? [], isFetchingGroups: isFetching, invites}
}


