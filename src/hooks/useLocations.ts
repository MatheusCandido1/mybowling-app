import { useQuery } from "@tanstack/react-query";
import { LocationsService } from "../services/locationsService";

export function useLocations() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['locations', 'getAll'],
    queryFn: LocationsService.getAll,
    staleTime: Infinity
  });

  return { locations: data ?? [], isFetching }
}
