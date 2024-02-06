import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";
import { MonthlyInterface } from "../services/dashboardService/monthly";

export function useDashboardMonthly(params: MonthlyInterface) {

  const { data = [], isFetching, refetch } = useQuery(
    ['dashboard', 'monthly'], () =>
    DashboardService.monthly(params),
    {
      staleTime: Infinity,
    },
  );

  return {
    monthly: data ?? [],
    isFetching,
    refetch
   }
}
