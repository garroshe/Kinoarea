import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledPosterPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 78px;
  height: 116px;
  background: ${colors.blue900};

  h2 {
    color: ${colors.white50};
    font-size: 10px;
  }

  .poster-icon {
    width: 50px;
  }

  .logotype-icon {
    width: 50px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 70px;
    height: 104px;

    h2 {
      font-size: 8px;
    }

    .poster-icon {
      width: 40px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 70px;
    height: 104px;

    h2 {
      font-size: 8px;
    }

    .poster-icon {
      width: 40px;
    }
  }
`;
