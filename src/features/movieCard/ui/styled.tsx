import styled from "styled-components";

import { colors } from "../../../shared/constants/style";

export const StyledMovieCard = styled.div`
  position: relative;
  width: 340px;
  height: 520px;
  cursor: pointer;

  img {
    width: 340px;
    height: 460px;
    border-radius: 10px;
  }
`;

export const StyledRating = styled.div<{ $bg: string }>`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  width: 62px;
  height: 33px;
  background: ${(props) => props.$bg};
  color: ${colors.white50};
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  border-radius: 10px;
  text-align: center;
  padding-top: 6px;
`;

export const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  margin-top: 12px;
`;

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.yellow500};
  margin-top: 5px;
`;

export const StyledActiveBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 460px;
  background: #3657cba6;
  border-radius: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 224px;
    height: 70px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #375ee866;
    background: ${colors.white50};
    font-weight: 700;
    font-size: 18px;
    line-height: 167%;
    color: ${colors.blue500};
    cursor: pointer;

    &:hover {
      background: ${colors.white400};
    }
  }
`;
