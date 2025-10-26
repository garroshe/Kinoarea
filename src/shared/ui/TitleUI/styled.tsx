import styled from "styled-components";

import type { StyledTitleUIPropsType } from "./types";

export const StyledTittleUI = styled.h2<StyledTitleUIPropsType>`
  line-height: 100%;

  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $color }) => $color};
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  margin-top: ${({ $marginTop }) => $marginTop}px;
  text-align: ${({ $textAlign }) => $textAlign};
`;
