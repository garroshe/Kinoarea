import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledPremierMovies = styled.div`
  margin: 80px 0;
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 78px;
  margin-bottom: 20px;

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

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 340px);
  gap: 32px 22px;
  justify-content: center;
  margin-top: 63px;
  margin-bottom: 63px;

  ${mapDeviceToMedia.laptopOnly} {
    grid-template-columns: repeat(4, 202px);
    gap: 48px 14px;
    margin-top: 28px;
    margin-bottom: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    grid-template-columns: repeat(3, 210px);
    gap: 40px 14px;
    margin-top: 28px;
    margin-bottom: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    grid-template-columns: repeat(2, 178px);
    gap: 40px 10px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
