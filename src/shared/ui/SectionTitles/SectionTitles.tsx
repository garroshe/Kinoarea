import { StyledSectionTitle } from "./styled.tsx";
import type { SectionTitlesProps } from "./types.ts";

export const SectionTitles = ({ title }: SectionTitlesProps) => {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
};
