import type { ReactNode } from "react";

import { StyledCenteredContentUI } from "./styled";

export type CenteredContentUIPropsType = {
  children: ReactNode;
  testId?: string;
};

export const CenteredContentUI = ({ children, testId }: CenteredContentUIPropsType) => {
  return <StyledCenteredContentUI data-testid={testId}>{children}</StyledCenteredContentUI>;
};
