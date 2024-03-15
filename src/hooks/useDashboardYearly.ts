import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";
import { YearlyInterface } from "../services/dashboardService/yearly";

export function useDashboardYearly(params: YearlyInterface) {

  const { data = [], isFetching, refetch, isRefetching} = useQuery(
    ['dashboard', 'yearly'], () =>
    DashboardService.yearly(params),
    {
      staleTime: Infinity,
    },
  );

  return {
    yearly: data.games ?? [],
    yearAverage: data.average ?? 0,
    yearTotalGames: data.total_games ?? 0,
    isFetchingYearly:isFetching,
    isRefetchingYearly:isRefetching,
    refetchYearly: refetch
   }
}
