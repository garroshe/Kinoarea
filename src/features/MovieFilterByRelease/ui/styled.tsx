import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledFilters = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;

  ${mapDeviceToMedia.mobileOnly} {
    justify-content: center;
    margin-top: 15px;
  }

  .filter {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${colors.white400};
    cursor: pointer;

    ${mapDeviceToMedia.laptopOnly} {
      font-size: 15px;
    }

    ${mapDeviceToMedia.tabletOnly} {
      font-size: 15px;
    }

    ${mapDeviceToMedia.mobileOnly} {
      font-size: 15px;
    }
  }

  .filter.active {
    color: ${colors.white50};
  }
`;
