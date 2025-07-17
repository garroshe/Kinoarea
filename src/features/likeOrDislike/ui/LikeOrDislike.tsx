import { useState } from "react";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import type { ILikeOrDislikeProps } from "../model/types";
import { StyledBlock, StyledLikeOrDislike, StyledRating } from "./styled";

export const LikeOrDislike = ({ type = "like", rating }: ILikeOrDislikeProps) => {
  const [isActive, setActive] = useState(false);

  const isIncrement = isActive && rating;

  const handleSetActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <StyledLikeOrDislike>
      <StyledBlock onClick={handleSetActive}>
        <SvgIcon className={`icon-${type}`} icon={icons.like} />
      </StyledBlock>
      <StyledRating>{isIncrement ? rating + 1 : rating}</StyledRating>
    </StyledLikeOrDislike>
  );
};
