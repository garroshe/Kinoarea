import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 52px;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  background: ${colors.white50};
  border-radius: 10px;

  ${mapDeviceToMedia.tabletOnly} {
    width: 43px;
    height: 41px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 28px;
    height: 27px;
    border-radius: 5px;
  }
`;
