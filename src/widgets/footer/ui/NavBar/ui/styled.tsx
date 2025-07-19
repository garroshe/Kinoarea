import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 34px 0 40px 0;

  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: ${colors.white50};
  }
`;
