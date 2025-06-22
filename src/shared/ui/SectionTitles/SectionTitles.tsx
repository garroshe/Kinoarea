import type { SectionTitlesProps } from './types.ts';
import { StyledSectionTitle } from './styled.tsx';

export const SectionTitles = ({ title }: SectionTitlesProps) => {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
};
