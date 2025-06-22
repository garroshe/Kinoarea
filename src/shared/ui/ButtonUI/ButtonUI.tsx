import type { ButtonUIProps } from './types.ts';
import { StyledButtonUI } from './styled.tsx';

export const ButtonUI = ({ children }: ButtonUIProps) => {
  return <StyledButtonUI>{children}</StyledButtonUI>;
};
