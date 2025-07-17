import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/bus/movie/api/movieService";
import { movieQueryKeys } from "@/bus/movie/store/queryKeys";

export const useNewTrailerFetch = () => {
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
    dataFetchMovies: data || [],
    loadingFetchMovies: isFetching || isLoading,
  };
};
