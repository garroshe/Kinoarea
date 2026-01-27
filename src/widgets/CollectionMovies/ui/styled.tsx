import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledCollectionMovie = styled.div`
  padding-bottom: 50px;
`;

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

export const StyledMoviesWrapper = styled.div`
  margin-bottom: 50px;
`;
