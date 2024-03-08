import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";
import { WeeklyInterface } from "../services/dashboardService/weekly";

export function useDashboardWeekly(params: WeeklyInterface) {

  const { data = [], isFetching, refetch, isRefetching} = useQuery(
    ['dashboard', 'monthly'], () =>
    DashboardService.weekly(params),
    {
      staleTime: Infinity,
    },
  );

  return {
    weekly: data.games ?? [],
    weekAverage: data.average ?? 0,
    weekTotalGames: data.total_games ?? 0,
    isFetchingWeekly:isFetching,
    isRefetchingWeekly:isRefetching,
    refetchWeekly: refetch
   }
}
