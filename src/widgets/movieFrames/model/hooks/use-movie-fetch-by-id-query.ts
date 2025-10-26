import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useMovieFetchByIdQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieByIdFetch({ id });
    },
    queryKey: [movieQueryKeys.movieByIdFetch, id],
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
    isMovieLoading: isLoading || isFetching,
    movieDataFetch: data,
  };
};
