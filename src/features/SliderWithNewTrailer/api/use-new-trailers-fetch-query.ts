import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useNewTrailersFetchQuery = () => {
  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.moviesUpComingFetch({ page: 1 });
    },
    queryKey: [movieQueryKeys.moviesUpComingFetch],
  });

  const { data, error } = response || {};

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    dataFetchTrailers: data,
    loadingFetchTrailers: isFetching || isLoading,
  };
};
