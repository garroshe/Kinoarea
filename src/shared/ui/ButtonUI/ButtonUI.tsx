import type { ButtonUIProps } from "./types";
import { StyledButtonUI } from "./styled";

export const ButtonUI = ({ children, type = "button", onClick, disabled }: ButtonUIProps) => {
  return (
    <StyledButtonUI onClick={onClick} type={type} disabled={disabled} $disabled={disabled}>
      {children}
    </StyledButtonUI>
  );
};
