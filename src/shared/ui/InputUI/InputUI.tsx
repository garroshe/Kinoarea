import { forwardRef } from "react";
import type { Ref } from "react";

import { StyledInputUI } from "./styled";

export type InputUIPropsType = {
  placeholder?: string;
  type?: string;
  name?: string;
  ref?: Ref<HTMLInputElement>;
};

export const InputUI = forwardRef<HTMLInputElement, InputUIPropsType>(({ type = "text", ...props }, ref) => {
  return <StyledInputUI type={type} {...props} ref={ref} />;
});
