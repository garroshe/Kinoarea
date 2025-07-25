import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSlider = styled.div`
  margin-top: 63px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 30px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 30px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 23px;
  }
`;

export const StyledNavigationBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 54px;

  svg {
    cursor: pointer;
  }

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 30px;
    gap: 16px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 30px;
    gap: 16px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 18px;
    gap: 16px;
  }
`;

export const StyledSlidesCount = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 16px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 16px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 16px;
  }
`;
