import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledPosterPlaceholder } from "./styled";

type SearchImagePlaceholderPropsType = {
  text: string;
};

export const SearchImagePlaceholder = ({ text }: SearchImagePlaceholderPropsType) => {
  return (
    <StyledPosterPlaceholder>
      <SvgIcon icon={icons.poster} className="poster-icon" />
      <h2>{text}</h2>
      <SvgIcon icon={icons.logotype} className="logotype-icon" />
    </StyledPosterPlaceholder>
  );
};
