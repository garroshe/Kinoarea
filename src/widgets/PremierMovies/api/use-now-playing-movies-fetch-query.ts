import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

type UseNowPlayingMoviesFetchQueryPropsType = {
  page: number;
};

export const useNowPlayingMoviesFetchQuery = ({ page }: UseNowPlayingMoviesFetchQueryPropsType) => {
  const {
    data: response,
    isFetching,
    isLoading,
    error: serviceError,
  } = useQuery({
    queryFn: async () => {
      return await movieService.moviesNowPlayingFetch({ page });
    },
    queryKey: [movieQueryKeys.moviesNowPlayingFetch, page],
  });

  const { data, error: queryError } = response || {};

  return {
    isLoading: isLoading || isFetching,
    error: queryError || serviceError,
    moviesData: data || [],
  };
};
