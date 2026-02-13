import { useState } from "react";
import classnames from "classnames";

import type { TabType } from "../model/types";
import { StyledMovieTabs } from "./styled";

type NavigateTabsPropsType = {
  tabs: TabType[];
  onChangeTab?: (tab: TabType) => void;
};

export const NavigateTabs = ({ tabs, onChangeTab }: NavigateTabsPropsType) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (newTab: TabType) => {
    setCurrentTab(newTab.index);
    if (onChangeTab) {
      onChangeTab(newTab);
    }
  };

  return (
    <StyledMovieTabs>
      {tabs.map((tab, i) => (
        <li key={i}>
          <a
            onClick={() => handleChangeTab(tab)}
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
