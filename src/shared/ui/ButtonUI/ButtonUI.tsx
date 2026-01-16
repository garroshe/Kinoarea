import type { ReactNode } from "react";

import { StyledButtonUI } from "./styled";

export type ButtonUIPropsType = {
  children?: ReactNode;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: number;
  height?: number;
  onSubmit?: () => void;
};

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
