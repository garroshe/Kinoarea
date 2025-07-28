import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSlider = styled.div`
  .swiper-slide {
    width: 342px !important;
  }

  img {
    max-width: 342px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    .swiper-slide {
      width: 203px !important;
    }

    img {
      max-width: 203px;
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    .swiper-slide {
      width: 158px !important;
    }

    img {
      max-width: 158px;
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    .swiper-slide {
      width: 178px !important;
    }

    img {
      max-width: 178px;
      border-radius: 10px;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  margin-top: 11px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
    margin-top: 6px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
    margin-top: 5px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    margin-top: 5px;
  }
`;

export const StyledPlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  cursor: pointer;

  .icon-play {
    width: 35px;
    height: 31px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    .icon-play {
      width: 20px;
      height: 18px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    .icon-play {
      width: 16px;
      height: 14px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    .icon-play {
      width: 18px;
      height: 16px;
    }
  }
`;

export const StyledWrapper = styled.div`
  position: relative;

  .block {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    width: 100%;
    height: 192px;

    &.active {
      background: ${colors.blue500};
      opacity: 60%;
    }
  }

  ${mapDeviceToMedia.laptopOnly} {
    .block {
      height: 114px;
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    .block {
      height: 88px;
      border-radius: 10px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    .block {
      height: 100px;
      border-radius: 10px;
    }
  }
`;
