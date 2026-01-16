import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledActionLabel, StyledHeader, StyledSubTitle, StyledTitle } from "./styled";

type MediaSectionHeaderPropsType = {
  title: string;
  subtitle: string;
  actionLabel: string;
  onActionClick: () => void;
  isLoading?: boolean;
};

// TO DO
// Add to other widgets

export const MediaSectionHeader = ({ title, actionLabel, onActionClick, subtitle }: MediaSectionHeaderPropsType) => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledActionLabel onClick={onActionClick}>
          {actionLabel}
          <SvgIcon icon={icons.arrow} />
        </StyledActionLabel>
      </StyledHeader>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
    </>
  );
};
