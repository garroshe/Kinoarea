import type { ICenteredContentUIProps } from "./types";
import { StyledCenteredContentUI } from "./styled";

export const CenteredContentUI = ({ children, testId }: ICenteredContentUIProps) => {
  return <StyledCenteredContentUI data-testid={testId}>{children}</StyledCenteredContentUI>;
};
