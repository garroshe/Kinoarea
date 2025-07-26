import styled from "styled-components";

import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledPopularMovie = styled.div`
  margin-bottom: 65px;

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

    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    flex-direction: column;
    align-items: start;
    gap: 8px;

    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    justify-content: center;
    gap: 10px;
    align-items: center;

    h2 {
      font-size: 32px;
      gap: 0;
    }
  }
`;
