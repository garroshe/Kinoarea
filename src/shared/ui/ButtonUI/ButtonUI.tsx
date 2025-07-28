import type { ButtonUIProps } from "./types";
import { StyledButtonUI } from "./styled";

export const ButtonUI = ({ children, type = "button", onClick, disabled, width = 422, height = 55 }: ButtonUIProps) => {
  return (
    <StyledButtonUI
      onClick={onClick}
      type={type}
      disabled={disabled}
      $disabled={disabled}
      $width={width}
      $height={height}
    >
      {children}
    </StyledButtonUI>
  );
};
