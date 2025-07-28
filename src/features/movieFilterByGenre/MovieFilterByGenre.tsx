import { useSearchParams } from "react-router-dom";

import { MovieFilterByGenreList } from "./ui/MovieFilterByGenreList";

export const MovieFilterByGenre = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genreSelect = searchParams.get("genre");
  const genreSelected = genreSelect ? Number(genreSelect) : null;

  const handleChangeMovies = (genre: number) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, genre: String(genre) });
  };

  return <MovieFilterByGenreList genreSelect={genreSelected} handleChangeMovies={handleChangeMovies} />;
};
