import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";

export function useDashboard() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['dashboard', 'getAll'],
    queryFn: DashboardService.getAll,
    staleTime: Infinity
  });

  return { stats: data ?? [], isFetching }
}
