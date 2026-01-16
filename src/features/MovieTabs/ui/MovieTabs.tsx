import { useState } from "react";
import classnames from "classnames";

import { MOVIE_TABS } from "../const";
import { StyledMovieTabs } from "./styled";

export const MovieTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (newTab: number) => {
    setCurrentTab(newTab);
  };

  return (
    <StyledMovieTabs>
      {MOVIE_TABS.map((tab, i) => (
        <li key={i}>
          <a
            onClick={() => handleChangeTab(tab.index)}
            className={classnames("tab", {
              active: currentTab === tab.index,
            })}
            href={tab.id}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </StyledMovieTabs>
  );
};
