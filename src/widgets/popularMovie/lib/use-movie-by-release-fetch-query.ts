import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useMovieByReleaseFetchQuery = () => {
  const [searchParams] = useSearchParams();

  const releaseDate = searchParams.get("releaseDate");

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieByDataReleaseFetch({ date: releaseDate ? releaseDate : "2019" });
    },
    queryKey: [movieQueryKeys.movieByReleaseDateFetch, releaseDate],
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
    movieDataFetch: data || [],
  };
};
