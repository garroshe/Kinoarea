import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 34px 0 40px 0;

  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: ${colors.white50};
  }

  ${mapDeviceToMedia.laptopOnly} {
    margin: 24px 0;

    a {
      font-size: 13px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin: 24px 0;

    a {
      font-size: 13px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    align-items: center;
    margin: 20px 0 24px 0;

    a {
      font-size: 13px;
      text-align: center;
    }
  }
`;
