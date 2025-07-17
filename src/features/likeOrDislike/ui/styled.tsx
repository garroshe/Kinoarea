import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledLikeOrDislike = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRating = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  text-align: center;
  margin-top: 8px;
`;

export const StyledBlock = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 10px;
  background: ${colors.blue800};
  color: ${colors.white50};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon-dislike {
    transform: rotate(180deg);
  }

  &:active {
    color: ${colors.blue500};
  }
`;
