import styled from "styled-components";

import type { StyledTitleUIProps } from "./types";

export const StyledTittleUI = styled.h2<StyledTitleUIProps>`
  line-height: 100%;

  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $color }) => $color};
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  margin-top: ${({ $marginTop }) => $marginTop}px;
`;
