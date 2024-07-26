import { useQuery } from "@tanstack/react-query";
import { LocationsService } from "../services/locationsService";
import { GetAllLocationsParams } from "../services/locationsService/getAll";

export function useLocations(params: GetAllLocationsParams) {
  const { data = [], isFetching, refetch, isRefetching } = useQuery(
    ['locations', 'getAll'], () =>
      LocationsService.getAll(params),
    {
      staleTime: Infinity,
      enabled: false
    },
  );

  const isLoading = isFetching || isRefetching;

  return { locations: data ?? [], isLoading, refetch}
}
