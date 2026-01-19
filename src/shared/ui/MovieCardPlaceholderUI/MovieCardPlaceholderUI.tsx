import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledDescription, StyledMovieCardPlaceholder } from "./styled";

type MovieCardPlaceholderUIPropsType = {
  size: "small" | "large";
};

export const MovieCardPlaceholderUI = ({ size }: MovieCardPlaceholderUIPropsType) => {
  return (
    <StyledMovieCardPlaceholder $size={size}>
      <SvgIcon icon={icons.poster} className="poster-icon" />
      <StyledDescription $size={size}>Нажаль постер відсутній</StyledDescription>
      <SvgIcon icon={icons.lightLogotype} className="logotype-icon" />
    </StyledMovieCardPlaceholder>
  );
};
