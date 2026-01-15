import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledErrorBlock = styled.div`
  width: 100%;
  margin: 20px 0;
  background: ${colors.blue700};
  border-radius: 10px;
  padding: 20px 0;
`;

export const StyledErrorTitle = styled.p`
  color: ${colors.white50};
  font-size: 30px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin-bottom: 30px;

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 26px;
    margin-bottom: 20px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledErrorText = styled.p`
  color: ${colors.white50};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 18px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 18px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
  }
`;
