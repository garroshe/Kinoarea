import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMoviePageList = styled.div`
  padding: 80px 0;

  ${mapDeviceToMedia.laptopOnly} {
    padding: 66px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 50px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 40px 0;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mapDeviceToMedia.laptopOnly} {
    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    h2 {
      font-size: 40px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    h2 {
      font-size: 32px;
    }

    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

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
