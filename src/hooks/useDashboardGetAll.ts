import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";

export function useDashboardGetAll() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['dashboard', 'getAll'],
    queryFn: DashboardService.getAll,
    staleTime: Infinity
  });

  return {
    stats: data ?? [],
    average_per_month: data.games_by_date ?? [],
    isFetching
   }
}
