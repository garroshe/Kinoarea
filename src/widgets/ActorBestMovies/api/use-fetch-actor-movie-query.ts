import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";

export const useFetchActorMovieQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
    error: queryError,
  } = useQuery({
    queryFn: async () => {
      return await movieService.actorMoviesFetch({ id });
    },
    queryKey: [movieService.actorMoviesFetch, id],
  });

  const { data, error: serviceError } = response || {};

  return {
    isMovieLoading: isLoading || isFetching,
    movieDataFetch: data,
    movieError: serviceError || queryError,
  };
};
