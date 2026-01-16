import { useFetchActorMovieQuery } from "../api/use-fetch-actor-movie-query";

export const useMovieData = () => {
  const { movieDataFetch, isMovieLoading, movieError } = useFetchActorMovieQuery();

  const bestMovies = movieDataFetch?.cast?.sort((a, b) => Number(b.popularity) - Number(a.popularity)).slice(0, 15);

  return {
    isMovieLoading,
    movieError,
    bestMovies,
  };
};
