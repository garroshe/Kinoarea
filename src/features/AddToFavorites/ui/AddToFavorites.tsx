import { useState } from "react";

import { colors } from "@/shared/constants/style";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledAddToFavorites } from "./styled";

export const AddToFavorites = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <StyledAddToFavorites onClick={handleClick}>
      <SvgIcon icon={icons.heart} color={isActive ? colors.red500 : colors.white50} />
    </StyledAddToFavorites>
  );
};
