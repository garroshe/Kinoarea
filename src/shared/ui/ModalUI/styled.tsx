import styled from "styled-components";

import { breakpoints, colors } from "@/shared/constants/style";

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
  box-shadow: 0 0 15px 0 ${colors.blue400};

  @media (max-width: ${breakpoints.tablet}) {
    width: 650px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 350px;
    padding: 20px;
  }
`;

export const StyledModalPosition = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    .modal-dagger {
      width: 20px;
      height: 20px;
    }
  }
`;
