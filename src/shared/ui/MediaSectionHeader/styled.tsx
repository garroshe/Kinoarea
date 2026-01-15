import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSubTitle = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 100%;
  color: ${colors.white50};
  margin: 30px 0 34px 0;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 20px;
    margin: 18px 0 40px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 20px;
    margin: 18px 0 40px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 18px;
    margin: 20px 0 8px 0;
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 78px;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 40px;
    text-align: center;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }
`;

export const StyledActionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 18px;
    gap: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 18px;
    gap: 15px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 18px;
    gap: 15px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    gap: 20px;
  }
`;
