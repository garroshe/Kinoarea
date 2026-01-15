import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledActorMovies = styled.div`
  margin-top: 80px;
  margin-bottom: 90px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 66px;
    margin-bottom: 60px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 40px;
    margin-bottom: 70px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 48px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 32px;
  }
`;

export const StyledMoreButton = styled.button`
  display: block;
  width: 200px;
  height: 70px;
  border: 2px solid ${colors.white50};
  background: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 167%;
  letter-spacing: 0;
  color: ${colors.white50};
  text-align: center;
  border-radius: 10px;
  margin: 50px auto 0 auto;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 ${colors.white50};
  }

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 14px;
    width: 170px;
    height: 55px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 14px;
    width: 170px;
    height: 55px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 14px;
    width: 170px;
    height: 55px;
  }
`;
