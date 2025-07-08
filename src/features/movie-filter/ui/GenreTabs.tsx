import { useState } from "react";
import classnames from "classnames";

import { GENRES_TABS } from "../model/constants";
import type { IGenreTabsProps } from "../model/types";
import { StyledGenreTabs } from "./styled";

export const GenreTabs = ({ onChangeMovies }: IGenreTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeMovies = (genre: number, tab: number) => {
    setActiveTab(tab);
    onChangeMovies(genre);
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
