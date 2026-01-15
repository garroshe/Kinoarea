import { useFetchActorMovieQuery } from "../api/use-fetch-actor-movie-query";

export const formaterMovieData = () => {
  const { movieDataFetch, isMovieLoading, movieError } = useFetchActorMovieQuery();

  const formatedMovieData = movieDataFetch?.cast
    ?.sort((a, b) => Number(b.popularity) - Number(a.popularity))
    .slice(0, 15);

  return {
    isMovieLoading,
    movieError,
    formatedMovieData,
  };
};
