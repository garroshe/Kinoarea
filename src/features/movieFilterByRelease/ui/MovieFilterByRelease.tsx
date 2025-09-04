import { useState } from "react";
import classnames from "classnames";
import { useSearchParams } from "react-router-dom";

import { LIST_ITEMS_BY_RELEASE } from "../model/constants";
import { StyledFilters } from "./styled";

export const MovieFilterByRelease = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const handleAddUrlDate = (date: number | null) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, releaseDate: String(date) });
    setActiveFilter(date);
  };

  return (
    <StyledFilters data-testid="release-tabs">
      {LIST_ITEMS_BY_RELEASE.map((item) => (
        <li
          data-testid="release-tab"
          className={classnames("filter", {
            active: item.date === activeFilter,
          })}
          key={item.key}
          onClick={() => handleAddUrlDate(item.date)}
        >
          {item.label}
        </li>
      ))}
    </StyledFilters>
  );
};
