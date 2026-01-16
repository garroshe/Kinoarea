import { useState } from "react";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledBlock, StyledLikeOrDislike, StyledRating } from "./styled";

export type LikeOrDislikePropsType = {
  type?: "like" | "dislike";
  rating?: number;
};

export const LikeOrDislike = ({ type = "like", rating }: LikeOrDislikePropsType) => {
  const [isActive, setActive] = useState(false);

  const isIncrement = isActive && rating;

  const handleSetActive = () => {
    setActive((prev) => !prev);
  };

  //TO DO
  // у майбутньому тут буде логіка для додавання лайкнутих фільмів у збережені

  return (
    <StyledLikeOrDislike>
      <StyledBlock onClick={handleSetActive}>
        <SvgIcon className={`icon-${type}`} icon={icons.like} />
      </StyledBlock>
      <StyledRating>{isIncrement ? rating + 1 : rating}</StyledRating>
    </StyledLikeOrDislike>
  );
};
