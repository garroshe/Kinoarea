import styled from "styled-components";

import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSequelsAndPrequels = styled.div`
  ${mapDeviceToMedia.laptopOnly} {
    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    h2 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }
`;
