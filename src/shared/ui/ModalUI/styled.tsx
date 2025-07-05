import styled from "styled-components";

import { colors } from "../../constants/style";

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

export const StyledModalContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 815px;
  min-height: 100px;
  background: ${colors.blue800};
  padding: 42px;
  border-radius: 10px;
`;

export const StyledModalPosition = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
`;
