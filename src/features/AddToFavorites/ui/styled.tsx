import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledAddToFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 5px;
  background: ${colors.blue800};
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    width: 52px;
    height: 52px;

    img {
      width: 21px;
      height: 19px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 52px;
    height: 52px;

    img {
      width: 21px;
      height: 19px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 52px;
    height: 52px;

    img {
      width: 21px;
      height: 19px;
    }
  }
`;
