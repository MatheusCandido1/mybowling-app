import { useQuery } from "@tanstack/react-query";
import { AuthService } from "../services/authService";

export function useMe() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: AuthService.me,
    staleTime: Infinity
  });

  return { me: data ?? [], isFetching }
}
