import type { ReactNode } from "react";

import { StyledContainer } from "./styled";

type ContainerUIPropsType = {
  children: ReactNode;
};

export const ContainerUI = ({ children }: ContainerUIPropsType) => {
  return <StyledContainer>{children}</StyledContainer>;
};
