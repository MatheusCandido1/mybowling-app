import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";
import { MonthlyInterface } from "../services/dashboardService/monthly";

export function useDashboardMonthly(params: MonthlyInterface) {

  const { data = [], isFetching, refetch, isRefetching} = useQuery(
    ['dashboard', 'monthly'], () =>
    DashboardService.monthly(params),
    {
      staleTime: Infinity,
    },
  );

  return {
    monthly: data.games ?? [],
    average: data.average ?? 0,
    total_games: data.total_games ?? 0,
    isFetching,
    isRefetching,
    refetch
   }
}
