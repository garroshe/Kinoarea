import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMovieCard = styled.div`
  position: relative;
  width: 340px;
  cursor: pointer;

  img {
    width: 340px;
    height: 460px;
    border-radius: 10px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 202px;

    img {
      width: 202px;
      height: 286px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 210px;

    img {
      width: 210px;
      height: 286px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 170px;

    img {
      width: 170px;
      height: 242px;
    }
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

  ${mapDeviceToMedia.laptopOnly} {
    top: 10px;
    right: 10px;
    width: 44px;
    height: 24px;
    font-size: 12px;
    padding-top: 4px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    top: 10px;
    right: 10px;
    width: 45px;
    height: 24px;
    font-size: 12px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    right: 10px;
    top: 8px;
    width: 38px;
    height: 21px;
    padding-top: 4px;
    font-size: 12px;
  }
`;

export const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  margin-top: 12px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
    margin-top: 3px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 15px;
    margin-top: 3px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
    margin-top: 3px;
  }
`;

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.yellow500};
  margin-top: 5px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 12px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 12px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 12px;
  }
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

  ${mapDeviceToMedia.laptopOnly} {
    height: 275px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    height: 286px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 242px;
  }

  p {
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

    ${mapDeviceToMedia.laptopOnly} {
      height: 50px;
      width: 160px;
      font-size: 14px;
    }

    ${mapDeviceToMedia.tabletOnly} {
      height: 50px;
      width: 166px;
      font-size: 14px;
    }

    ${mapDeviceToMedia.mobileOnly} {
      height: 43px;
      width: 140px;
      font-size: 14px;
    }

    &:hover {
      background: ${colors.white400};
    }
  }
`;
