import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMovieActors = styled.div`
  margin-top: 48px;
  margin-bottom: 82px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 82px;
    margin-bottom: 56px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 41px;
    margin-bottom: 52px;
  }
`;

export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  gap: 45px;
  margin-top: 60px;

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

export const StyledAllActors = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      text-align: center;
    }
  }
`;
