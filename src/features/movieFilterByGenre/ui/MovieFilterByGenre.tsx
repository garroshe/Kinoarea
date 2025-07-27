import classnames from "classnames";
import { useSearchParams } from "react-router-dom";

import { DEFAULT_TAB, GENRES_TABS } from "../model/constants";
import { StyledGenreTabs } from "./styled";

export const MovieFilterByGenre = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genreSelect = searchParams.get("genre");

  const handleChangeMovies = (genre: number) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, genre: String(genre) });
  };

  return (
    <StyledGenreTabs data-testid="genres-tabs">
      {GENRES_TABS.map((genre, index) => (
        <li
          className={classnames({
            active: Number(genreSelect) === genre.id || DEFAULT_TAB === index,
          })}
          onClick={() => handleChangeMovies(genre.id)}
          key={index}
        >
          {genre.label}
        </li>
      ))}
    </StyledGenreTabs>
  );
};
