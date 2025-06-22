import { StyledButtonUI } from "./styled.tsx";
import type { ButtonUIProps } from "./types.ts";

export const ButtonUI = ({ children }: ButtonUIProps) => {
  return <StyledButtonUI>{children}</StyledButtonUI>;
};
