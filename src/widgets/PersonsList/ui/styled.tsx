import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledPersonList = styled.div`
  margin: 80px 0;
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 78px;
  margin-bottom: 4px;

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

export const StyledActorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  gap: 45px;
  margin: 60px 0;

  ${mapDeviceToMedia.laptopOnly} {
    grid-template-columns: repeat(3, 250px);
    margin-top: 20px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    grid-template-columns: repeat(2, 250px);
    margin-top: 20px;
    gap: 56px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    grid-template-columns: repeat(2, 166px);
    margin-top: 20px;
    gap: 20px;
  }
`;
