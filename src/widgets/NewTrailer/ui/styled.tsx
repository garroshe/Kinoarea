import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledNewTrailer = styled.section`
  margin-bottom: 75px;

  a {
    display: flex;
    gap: 27px;
    align-items: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${colors.white50};
    cursor: pointer;
  }

  ${mapDeviceToMedia.laptopOnly} {
    margin-bottom: 34px;

    a {
      font-size: 18px;
      gap: 14px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-bottom: 20px;

    a {
      font-size: 18px;
      gap: 14px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-bottom: 28px;

    a {
      font-size: 18px;
      gap: 8px;

      svg {
        width: 12px;
      }
    }
  }
`;

export const StyledMarks = styled.div`
  display: flex;
  gap: 8px;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 5px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 4px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 4px;
  }
`;

export const StyledTrailerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-bottom: 20px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-bottom: 24px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-bottom: 18px;
  }
`;

export const StyledLeftBlock = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 24px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 8px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }
`;

export const StyledTrailerTitle = styled.h3`
  font-weight: 900;
  font-size: 45px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 35px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 30px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 25px;
  }
`;

export const StyledTrailer = styled.div`
  position: relative;
  margin-bottom: 26px;
  height: 765px;
  margin-top: 20px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-bottom: 4px;
    height: 454px;

    iframe {
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-bottom: 2px;
    height: 352px;

    iframe {
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-bottom: 8px;
    height: 196px;

    iframe {
      border-radius: 10px;
    }
  }
`;
