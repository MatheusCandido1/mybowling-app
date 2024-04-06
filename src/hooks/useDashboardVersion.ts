import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboardService";

export function useDashboardVersion() {
  const { data = {}, isFetching } = useQuery({
    queryKey: ['dashboard', 'version'],
    queryFn: DashboardService.version,
    staleTime: Infinity
  });

  return { apiVersion: data ?? {}, isCheckingVersion: isFetching }
}
