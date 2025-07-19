import styled from "styled-components";

import { breakpoints, colors } from "@/shared/constants/style";

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: ${colors.white50};
  }

  @media (max-width: ${breakpoints.tablet}) {
    a {
      font-size: 12px;
    }
  }
`;
