import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledWrapperFrames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;

  ${mapDeviceToMedia.mobileOnly} {
    grid-template-columns: 1fr;
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
  }
`;

export const StyledMoreImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.blue500};
  opacity: 0.5;
  cursor: pointer;
  border-radius: 10px;
`;

export const StyledCountImage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;
`;
