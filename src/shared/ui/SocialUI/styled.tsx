import styled from "styled-components";

import { breakpoints } from "@/shared/constants/style";

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 5px;

    a {
      svg {
        max-width: 18px;
        max-height: 15px;
      }
    }
  }

  svg {
    max-height: 15px;
    cursor: pointer;
  }
`;
