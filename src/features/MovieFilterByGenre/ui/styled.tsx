import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledGenreTabs = styled.ul`
  display: flex;
  gap: 15px;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 35px;
    margin-top: 10px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    justify-content: space-between;
    margin-top: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }

  li {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
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

    &:hover {
      color: ${colors.white50};
    }

    &.active {
      font-weight: 900;
      color: ${colors.white50};
    }
  }
`;
