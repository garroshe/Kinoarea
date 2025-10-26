import styled from "styled-components";

import { colors } from "@/shared/constants/style";

import type { StyledButtonPropsType } from "./types";

export const StyledButtonUI = styled.button<StyledButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${(props) => (props.$disabled ? colors.yellow800 : colors.yellow500)};
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  padding: 0 13px;
  text-align: center;
  color: ${colors.blue700};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;
