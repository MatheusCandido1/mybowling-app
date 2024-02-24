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
    splits: data.splits_converted ?? [],
    average_per_month: data.games_by_date ?? [],
    isFetching
   }
}
