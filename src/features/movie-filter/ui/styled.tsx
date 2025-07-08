import styled from "styled-components";

import { colors } from "../../../shared/constants/style";

export const StyledGenreTabs = styled.ul`
  display: flex;
  gap: 15px;

  li {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${colors.white400};
    cursor: pointer;

    &:hover {
      color: ${colors.white50};
    }

    &.active {
      font-weight: 900;
      color: ${colors.white50};
    }
  }
`;
