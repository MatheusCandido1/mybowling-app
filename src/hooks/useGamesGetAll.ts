import { useInfiniteQuery } from "@tanstack/react-query";
import { GamesService } from "../services/gamesService";
import { GamesFilters } from "../services/gamesService/getAll";

export function useGamesGetAll(filters: GamesFilters) {
  const {
    data,
    isFetching: isFetchingGames,
    refetch: refetchGames,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
   } = useInfiniteQuery({
    queryKey: ['games', 'getAll'],
    queryFn: ({pageParam}) => GamesService.getAll(filters, pageParam),
    getNextPageParam: (page, allPages) => {
      const currentPage = page.pagination.current_page;
      const lastPage = page.pagination.total_pages;

      if(currentPage === lastPage) return undefined;
      return allPages.length + 1;
    },
    staleTime: Infinity
  });

  return {
    data,
    isFetchingGames,
    refetchGames,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
   }
}
