import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledActorCard = styled.div`
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${colors.white50};
    margin-top: 16px;
    margin-bottom: 11px;

    &:hover {
      color: ${colors.white400};
      cursor: pointer;
    }

    ${mapDeviceToMedia.mobileOnly} {
      font-size: 14px;
    }
  }
`;

export const StyledImageActor = styled.div`
  height: 375px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    height: 375px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    height: 375px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 240px;
  }

  &:hover {
    background: ${colors.grey900};
    opacity: 0.5;
    cursor: pointer;
    border-radius: 10px;
    scale: 1.05;
  }
`;

export const StyledCharacterName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${colors.yellow500};

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 12px;
  }
`;
