import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRightBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledButton = styled.button`
  background: ${colors.blue500};
  width: 138px;
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px ${colors.blue400};
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  color: ${colors.white50};
  cursor: pointer;
`;
