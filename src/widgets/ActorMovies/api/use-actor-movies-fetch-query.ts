import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useActorMoviesFetchQuery = () => {
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
    queryKey: [movieQueryKeys.actorMoviesFetch, id],
  });

  const { data, error: serviceError } = response || {};

  return {
    isLoading: isFetching || isLoading,
    error: serviceError || queryError,
    actorMoviesData: data,
  };
};
