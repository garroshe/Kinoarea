import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSearchMovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;

export const StyledImg = styled.div`
  width: 78px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
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
    font-size: 16px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${mapDeviceToMedia.mobileOnly} {
    gap: 10px;
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

export const StyledGenres = styled.div`
  color: ${colors.yellow500};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const StyledRating = styled.div<{ $bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 33px;
  background: ${(props) => props.$bg};
  color: ${colors.white50};
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  border-radius: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 44px;
    height: 24px;
    font-size: 12px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 45px;
    height: 24px;
    font-size: 12px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 38px;
    height: 21px;
    font-size: 12px;
  }
`;
