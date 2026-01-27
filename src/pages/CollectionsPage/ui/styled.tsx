import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledCollectionsPage = styled.div``;

export const StyledTitle = styled.h2`
  font-weight: 900;
  font-size: 65px;
  color: ${colors.white50};
  margin-top: 50px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 32px;
  }
`;

export const StyledDescription = styled.p`
  color: ${colors.white50};
  font-size: 18px;
  font-weight: 500;
  line-height: 168.7%;
  margin: 18px 0 60px 0;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
    margin: 20px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 14px;
    margin: 10px 0 20px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    margin: 10px 0 22px 0;
  }
`;
