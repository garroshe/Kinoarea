import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledLikeOrDislike = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRating = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  text-align: center;
  margin-top: 8px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 11px;
    margin-top: 4px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 9px;
    margin-top: 2px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 9px;
    margin-top: 2px;
  }
`;

export const StyledBlock = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 10px;
  background: ${colors.blue800};
  color: ${colors.white50};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    width: 52px;
    height: 52px;

    svg {
      width: 23px;
      height: 23px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 52px;
    height: 52px;

    svg {
      width: 23px;
      height: 23px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 52px;
    height: 52px;

    svg {
      width: 23px;
      height: 23px;
    }
  }

  .icon-dislike {
    transform: rotate(180deg);
  }

  &:active {
    color: ${colors.blue500};
  }
`;
