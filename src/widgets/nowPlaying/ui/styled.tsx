import styled from "styled-components";

import { breakpoints } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledNowPlaying = styled.section`
  margin-top: 50px;
  margin-bottom: 54px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 32px;
    margin-bottom: 50px;

    button {
      width: 164px;
      height: 60px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 35px;
    margin-bottom: 24px;

    button {
      width: 160px;
      height: 50px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 26px;
    margin-bottom: 30px;

    button {
      width: 160px;
      height: 54px;
    }
  }
`;

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 340px);
  gap: 32px 22px;
  justify-content: center;
  margin-top: 63px;

  ${mapDeviceToMedia.laptopOnly} {
    grid-template-columns: repeat(4, 202px);
    gap: 48px 14px;
    margin-top: 28px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    grid-template-columns: repeat(3, 210px);
    gap: 40px 14px;
    margin-top: 28px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    grid-template-columns: repeat(2, 178px);
    gap: 40px 10px;
    margin-top: 20px;
  }
`;

export const StyledNowPlayingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    display: block;

    h2 {
      font-size: 40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    h2 {
      font-size: 40px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;

    h2 {
      font-size: 32px;
    }
  }
`;
