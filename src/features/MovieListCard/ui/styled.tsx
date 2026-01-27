import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMovieListCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.grey400};
  padding: 28px 0 48px 0;

  ${mapDeviceToMedia.laptopOnly} {
    padding: 18px 0 23px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 18px 0 23px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 18px 0 23px 0;
    gap: 10px;
    justify-content: start;
  }
`;

export const StyledPoster = styled.div`
  width: 200px;
  height: 285px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 134px;
    height: 200px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 134px;
    height: 200px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 134px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 224px;
  height: 71px;
  border-radius: 10px;
  background: ${colors.blue500};
  box-shadow: 0 0 15px 0 ${colors.blue400};
  color: ${colors.white50};
  cursor: pointer;
  line-height: 167%;
  font-weight: 700;
  border: none;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 184px;
    height: 63px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 184px;
    height: 63px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    display: none;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 50px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-left: 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-left: 0;
    flex-direction: column;
    align-items: start;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-left: 0;
    flex-direction: column;
    align-items: start;
  }
`;

export const StyledInfo = styled.div`
  width: 580px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 250px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 300px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: auto;
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 17px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 17px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 17px;
  }
`;

export const StyledGenre = styled.div`
  color: ${colors.yellow500};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 13px;
    margin-top: 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
    margin-top: 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    margin-top: 0;
  }
`;

export const StyledReleaseDate = styled.div`
  color: ${colors.grey400};
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 13px;
    margin-top: 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
    margin-top: 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    margin-top: 0;
  }
`;

export const StyledRatingsWrapper = styled.div`
  display: flex;
  gap: 15px;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 5px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 5px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 5px;
  }
`;

export const StyledRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StyledRatingTitle = styled.p`
  color: ${colors.blue50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 15px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 40px;
  border-radius: 5px;
  color: ${colors.white50};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 63px;
    height: 33px;
    font-size: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 63px;
    height: 33px;
    font-size: 15px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 63px;
    height: 33px;
    font-size: 15px;
  }
`;
