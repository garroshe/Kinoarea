import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledActorCard = styled.div`
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${colors.white50};
    margin-top: 16px;
    margin-bottom: 11px;

    &:hover {
      color: ${colors.white400};
      cursor: pointer;
    }
  }
`;

export const StyledImageActor = styled.div`
  height: 375px;

  &:hover {
    background: ${colors.grey900};
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const StyledCharacterName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${colors.yellow500};
`;
