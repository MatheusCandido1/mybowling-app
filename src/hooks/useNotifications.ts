import { useQuery } from "@tanstack/react-query";
import { NotificationsService} from "../services/notificationService";

export function useNotifications() {
  const { data = [], isFetching, refetch } = useQuery({
    queryKey: ['notifications', 'getAll'],
    queryFn: NotificationsService.getAll,
    staleTime: Infinity
  });

  return { notifications: data ?? [], isFetching, refetch }
}
