import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMainInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 36px 0;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 0;
    justify-content: space-between;
    padding: 47px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 10px;
    justify-content: center;
    padding: 30px 0;
  }
`;

export const StyledImg = styled.img`
  width: 395px;
  height: 540px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 290px;
    height: auto;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 260px;
    height: 387px;
  }
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

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 12px;
  }
`;

export const StyledTitleAndFavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  ${mapDeviceToMedia.tabletOnly} {
    gap: 20px;
  }

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

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
    width: 500px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 16px;
    font-size: 15px;
    width: 300px;
  }
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
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 215px;
    height: 60px;
    gap: 9px;
    font-size: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 215px;
    height: 60px;
    gap: 9px;
    font-size: 15px;
  }
`;

export const StyledButtonAndSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-top: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 32px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`;

export const StyledProgress = styled.div<{ $width: number }>`
  position: relative;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background: ${colors.blue800};

  ${mapDeviceToMedia.laptopOnly} {
    width: 166px;
    height: 52px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 166px;
    height: 52px;
  }

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

  ${mapDeviceToMedia.laptopOnly} {
    gap: 0;
    justify-content: space-between;
    margin: 45px 0;

    div {
      gap: 30px;
    }
  }
`;

export const StyledListKeys = styled.ul`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 16px;
  }
`;

export const StyledListValue = styled.ul`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: ${colors.yellow800};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 16px;
  }
`;
