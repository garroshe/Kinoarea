import React from "react";

export interface ButtonUIProps {
  children?: React.ReactNode;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IStyledButtonProps {
  type: string;
  $disabled?: boolean;
}
