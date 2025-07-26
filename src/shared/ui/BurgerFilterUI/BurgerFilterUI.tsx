import type { IBurgerFilterUIProps } from "./types";
import { StyledBurgerFilter } from "./styled";

export const BurgerFilterUI = ({ onClick }: IBurgerFilterUIProps) => {
  return (
    <StyledBurgerFilter onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledBurgerFilter>
  );
};
