import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../../app/store";
import { fetchMovies, fetchMoviesByGenre } from "../../../entities/movie/model/slice";

export const useInitNowPlayingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading } = useSelector((state: RootState) => state.movies);

  const handleGenreChange = (genreId: number) => {
    if (genreId === 0) {
      dispatch(fetchMovies(1));
    } else {
      dispatch(fetchMoviesByGenre(genreId));
    }
  };

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);

  return { movies, loading, handleGenreChange };
};
