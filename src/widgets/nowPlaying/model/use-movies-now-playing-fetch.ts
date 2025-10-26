import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useMoviesNowPlayingFetch = () => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const genrePayload = genre && Number(genre) !== 0 ? genre : "";

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieNowPlayingFetch({ genre: genrePayload });
    },
    queryKey: [movieQueryKeys.movieByGenreFetch, genre],
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
    isMovieLoading: isLoading || isFetching,
    movieDataFetch: data || [],
  };
};
