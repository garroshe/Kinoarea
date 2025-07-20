import styled from "styled-components";

import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  ${mapDeviceToMedia.mobileOnly} {
    max-width: 100%;
  }

  ${mapDeviceToMedia.tabletOnly} {
    max-width: 720px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    max-width: 850px;
  }

  ${mapDeviceToMedia.desktop} {
    max-width: 1280px;
  }

  ${mapDeviceToMedia.wide} {
    max-width: 1440px;
  }
`;
