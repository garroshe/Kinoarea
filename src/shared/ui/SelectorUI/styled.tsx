import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSelector = styled.select`
  height: 50px;
  background: ${colors.blue800};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  padding: 10px 33px;
  color: ${colors.white50};
  border: none;
  outline: none;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 14px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 14px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 14px;
  }
`;
