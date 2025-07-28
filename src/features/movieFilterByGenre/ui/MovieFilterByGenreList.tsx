import classnames from "classnames";

import { DEFAULT_TAB, GENRES_TABS } from "../model/constants";
import type { IMovieListProps } from "../model/types";
import { StyledGenreTabs } from "./styled";

export const MovieFilterByGenreList = ({ genreSelect, handleChangeMovies }: IMovieListProps) => {
  return (
    <StyledGenreTabs data-testid="genres-tabs">
      {GENRES_TABS.map((genre, index) => (
        <li
          data-testid="genres-tab"
          className={classnames({
            active: genreSelect === genre.id || DEFAULT_TAB === index,
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
