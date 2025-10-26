import type { ButtonUIPropsType } from "./types";
import { StyledButtonUI } from "./styled";

export const ButtonUI = ({
  children,
  type = "button",
  onClick,
  onSubmit,
  disabled,
  width = 422,
  height = 55,
}: ButtonUIPropsType) => {
  return (
    <StyledButtonUI
      onClick={onClick}
      onSubmit={onSubmit}
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
