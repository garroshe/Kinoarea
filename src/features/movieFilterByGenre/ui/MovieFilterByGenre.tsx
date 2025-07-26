import { useState } from "react";
import classnames from "classnames";
import { useSearchParams } from "react-router-dom";

import { GENRES_TABS } from "../model/constants";
import { StyledGenreTabs } from "./styled";

export const MovieFilterByGenre = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeMovies = (genre: number, tab: number) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setActiveTab(tab);
    setSearchParams({ ...currentParams, genre: String(genre) });
  };

  return (
    <StyledGenreTabs data-testid="genres-tabs">
      {GENRES_TABS.map((genre, index) => (
        <li
          className={classnames({
            active: activeTab === index,
          })}
          onClick={() => handleChangeMovies(genre.id, index)}
          key={index}
        >
          {genre.label}
        </li>
      ))}
    </StyledGenreTabs>
  );
};
