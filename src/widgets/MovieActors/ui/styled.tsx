import styled from "styled-components";

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
