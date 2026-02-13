import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSearchPersonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 815px;
  padding: 15px 10px;
  background: ${colors.blue800};
  border-radius: 10px;
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    width: 700px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 500px;
    padding: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 300px;
    gap: 10px;
  }
`;

export const StyledPoster = styled.div`
  width: 70px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  img {
    min-width: 78px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 70px;

    img {
      min-width: 70px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 70px;

    img {
      min-width: 70px;
    }
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 18px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 18px;
  }
`;

export const StyledSubTitle = styled.h2`
  color: ${colors.white400};
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin: 5px 0;

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 14px;
    line-height: 14px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 12px;
    line-height: 12px;
  }
`;
