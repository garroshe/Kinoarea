import type { ReactNode } from "react";

import { StyledContainer } from "./styled";

export const ContainerUI = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
