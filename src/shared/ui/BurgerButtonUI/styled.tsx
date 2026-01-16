import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledBurgerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  span {
    width: 14px;
    height: 1px;
    background: ${colors.white50};
  }
`;
