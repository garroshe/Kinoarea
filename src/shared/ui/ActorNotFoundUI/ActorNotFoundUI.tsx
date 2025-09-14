import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { SIZE_TYPE } from "./constatns";
import { StyledLargeCard, StyledSmallCard } from "./styled";

type ActorNotFoundUIPropsType = { size: "small" | "large" };

export const ActorNotFoundUI = ({ size = "small" }: ActorNotFoundUIPropsType) => {
  if (size === SIZE_TYPE.large) {
    return (
      <StyledLargeCard>
        <SvgIcon icon={icons.camera} />
        <p>На жаль, фото відсутня</p>
        <SvgIcon icon={icons.lightLogotype} />
      </StyledLargeCard>
    );
  }

  return (
    <StyledSmallCard>
      <SvgIcon icon={icons.camera} />
      <p>На жаль, фото відсутня</p>
      <SvgIcon icon={icons.lightLogotype} />
    </StyledSmallCard>
  );
};
