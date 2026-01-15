import { useState } from "react";

import { useActorMoviesFetchQuery } from "../api/use-actor-movies-fetch-query";

export const formatedData = () => {
  const [movieCount, setMovieCount] = useState(10);
  const { isLoading, error, actorMoviesData } = useActorMoviesFetchQuery();

  const movies = actorMoviesData?.cast?.slice(0, movieCount);

  const handleLoadMore = () => {
    setMovieCount((prev) => prev + 10);
  };

  return {
    isLoading,
    movies,
    error,
    handleLoadMore,
  };
};
