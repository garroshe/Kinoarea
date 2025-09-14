import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledRatingCircleUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const StyledLabel = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: ${colors.white50};
`;

export const StyledNoRatingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background: ${colors.grey900};
  border-radius: 50%;
  font-weight: 700;
  font-size: 13px;
  line-height: 100%;
  color: ${colors.white50};
`;
