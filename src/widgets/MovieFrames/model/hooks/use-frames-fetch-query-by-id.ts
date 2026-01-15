import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useFramesFetchQueryById = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieFramesFetch({ id });
    },
    queryKey: [movieQueryKeys.movieFramesFetch, id],
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
    isMovieImagesLoading: isLoading || isFetching,
    movieImagesFetch: data,
  };
};
