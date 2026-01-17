import styled from "styled-components";

import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${mapDeviceToMedia.tabletOnly} {
    gap: 5px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 5px;

    a {
      svg {
        max-width: 18px;
        max-height: 15px;
      }
    }
  }

  svg {
    max-height: 15px;
    cursor: pointer;
  }
`;
