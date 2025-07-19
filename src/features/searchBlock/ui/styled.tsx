import styled from "styled-components";

import { breakpoints, colors } from "@/shared/constants/style";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 52px;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  background: ${colors.white50};
  border-radius: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 43px;
    height: 41px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 28px;
    height: 27px;
    border-radius: 5px;
  }
`;
