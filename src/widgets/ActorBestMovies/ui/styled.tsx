import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledWrapper = styled.div`
  padding-bottom: 77px;

  ${mapDeviceToMedia.laptopOnly} {
    padding-bottom: 62px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding-bottom: 62px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding-bottom: 52px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 78px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 35px;
  }
`;
