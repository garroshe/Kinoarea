import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 65px;
  margin-top: 73px;
  margin-bottom: 63px;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;
