import { useState } from "react";
import classnames from "classnames";
import { useSearchParams } from "react-router-dom";

import { LIST_ITEMS_BY_RELEASE } from "../model/constants";
import { StyledFilters } from "./styled";

export const MovieFilterByRelease = () => {
  const [, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const handleAddUrlDate = (date: number | null) => {
    setSearchParams({ releaseDate: String(date) });
    setActiveFilter(date);
  };

  return (
    <StyledFilters>
      {LIST_ITEMS_BY_RELEASE.map((item) => (
        <li
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
