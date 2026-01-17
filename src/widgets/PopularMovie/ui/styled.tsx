import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledPopularMovie = styled.div`
  margin-bottom: 65px;
  margin-top: 75px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 34px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 20px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 28px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mapDeviceToMedia.laptopOnly} {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 65px;
  font-weight: 900;
  color: ${colors.white50};

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
