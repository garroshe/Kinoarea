import React from "react";

export type ButtonUIPropsType = {
  children?: React.ReactNode;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: number;
  height?: number;
  onSubmit?: () => void;
};

export type StyledButtonPropsType = {
  type: string;
  $disabled?: boolean;
  $width?: number;
  $height?: number;
};
