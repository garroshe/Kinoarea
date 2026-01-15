import { useInfiniteQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";
import type { MovieType } from "@/entities/movie/types";

type UseFetchMoviesQueryPropsType = {
  sortBy: string;
};

export const useFetchMoviesQuery = ({ sortBy }: UseFetchMoviesQueryPropsType) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery<MovieType[]>({
    queryKey: [movieQueryKeys.moviesFetch, sortBy],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => movieService.moviesFetch({ page: pageParam as number, sortBy }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.length) return undefined;
      return pages.length + 1;
    },
  });

  return {
    movies: data?.pages.flat() ?? [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  };
};
