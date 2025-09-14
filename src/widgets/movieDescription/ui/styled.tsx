import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMainInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 47px 0;
`;

export const StyledImg = styled.img`
  width: 395px;
  height: 540px;
`;

export const StyledSubTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: ${colors.white50};
`;

export const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`;

export const StyledTitleAndFavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    text-decoration: underline;
    text-decoration-style: solid;
    color: ${colors.white50};
    cursor: pointer;

    &:hover {
      color: ${colors.white400};
    }
  }
`;

export const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 167%;
  color: ${colors.white50};
  width: 700px;
  margin-top: 10px;
`;

export const StyledWatchTrailerButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 260px;
    height: 70px;
    border: 2px solid ${colors.white50};
    background: transparent;
    font-weight: 700;
    font-size: 18px;
    line-height: 167%;
    letter-spacing: 0;
    color: ${colors.white50};
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 0 10px 0 ${colors.white50};
`;

export const StyledButtonAndSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-top: 30px;
`;

export const StyledProgress = styled.div<{ $width: number }>`
  position: relative;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background: ${colors.blue800};

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.$width}%;
    border-radius: 5px;
    background: ${colors.green700};
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: ${colors.green500};
    text-align: center;
    width: 100%;
  }
`;

export const StyledActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const StyledSavedMovie = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${colors.white50};
`;

export const StyledInfoTable = styled.div`
  display: flex;
  justify-content: center;
  gap: 63px;
  margin: 46px 0;

  div {
    display: flex;
    gap: 50px;

    li {
      margin-bottom: 15px;
    }
  }
`;

export const StyledListKeys = styled.ul`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: ${colors.white50};
`;

export const StyledListValue = styled.ul`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: ${colors.yellow800};
`;
