import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li {
    font-weight: 500;
    font-size: 16px;
    line-height: 169%;
    color: ${colors.white400};

    &: hover {
      color: ${colors.grey400};
    }
  }
`;
