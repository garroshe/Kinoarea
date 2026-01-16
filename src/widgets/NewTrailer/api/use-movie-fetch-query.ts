import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

type HooksPropsType = {
  trailerId?: string | null;
};

export const useMovieFetchQuery = ({ trailerId }: HooksPropsType) => {
  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return movieService.movieByIdFetch({ id: trailerId });
    },
    queryKey: [movieQueryKeys.movieByIdFetch, trailerId],
  });

  const { data, error } = response || {};

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }

  return {
    dataMovieFetch: data,
    loadingMovieFetch: isFetching || isLoading,
  };
};
