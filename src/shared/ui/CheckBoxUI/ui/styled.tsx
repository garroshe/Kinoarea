import styled from "styled-components";

import { colors } from "../../../constants/style";

export const StyledCheckBoxUI = styled.div<{ $checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid ${colors.yellow500};
  background: ${(props) => (props.$checked ? colors.yellow500 : "transparent")};
  transition: all 0.2s;

  svg {
    display: ${(props) => (props.$checked ? "block" : "none")};
  }
`;

export const StyledHideCheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const StyledCheckBoxContainer = styled.div`
  display: inline-flex;
  gap: 9px;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 9px;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.white50};
`;
