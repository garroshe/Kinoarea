import { useInfiniteQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import type { MovieType } from "@/entities/movie/model/types";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

type UseFetchMoviesQueryPropsType = {
  sortBy: string;
};

export const useFetchMoviesQuery = ({ sortBy }: UseFetchMoviesQueryPropsType) => {
  const query = useInfiniteQuery<MovieType[]>({
    queryKey: [movieQueryKeys.moviesFetch, sortBy],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => movieService.moviesFetch({ page: pageParam as number, sortBy }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.length) return undefined;
      return pages.length + 1;
    },
  });

  return {
    movies: query.data?.pages.flat() ?? [],
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    isLoading: query.isLoading,
  };
};
