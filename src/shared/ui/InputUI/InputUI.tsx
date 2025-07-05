import { forwardRef } from "react";

import type { InputUIProps } from "./types";
import { StyledInputUI } from "./styled";

export const InputUI = forwardRef<HTMLInputElement, InputUIProps>(({ type = "text", ...props }, ref) => {
  return <StyledInputUI type={type} {...props} ref={ref} />;
});
