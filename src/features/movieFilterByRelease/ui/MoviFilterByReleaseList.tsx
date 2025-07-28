import classnames from "classnames";

import { LIST_ITEMS_BY_RELEASE } from "../model/constants";
import type { IMovieFilterByReleaseListProps } from "../model/types";
import { StyledFilters } from "./styled";

export const MovieFilterByReleaseList = ({ activeFilter, handleAddUrlDate }: IMovieFilterByReleaseListProps) => {
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
