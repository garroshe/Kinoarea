import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledLargeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 176px 0 34px 0;
  width: 395px;
  height: 540px;
  border-radius: 10px;
  background: ${colors.blue800};

  p {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    margin: 22px 0 107px 0;
    color: ${colors.grey800};
  }
`;

export const StyledSmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 25px 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${colors.blue800};

  p {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    margin: 22px 0 107px 0;
    color: ${colors.grey800};
  }
`;
