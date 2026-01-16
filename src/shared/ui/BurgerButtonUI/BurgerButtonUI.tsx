import { StyledBurgerButton } from "./styled";

export type BurgerButtonUIPropsType = {
  onClick: () => void;
};
export const BurgerButtonUI = ({ onClick }: BurgerButtonUIPropsType) => {
  return (
    <StyledBurgerButton onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledBurgerButton>
  );
};
