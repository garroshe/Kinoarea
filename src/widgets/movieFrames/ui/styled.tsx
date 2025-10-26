import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMovieFrames = styled.div`
  margin-top: 97px;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    gap: 20px;

    h2 {
      text-align: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 32px;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    color: ${colors.white50};

    ${mapDeviceToMedia.laptopOnly} {
      font-size: 18px;
      gap: 15px;
    }

    ${mapDeviceToMedia.tabletOnly} {
      font-size: 18px;
      gap: 15px;
    }

    ${mapDeviceToMedia.mobileOnly} {
      font-size: 18px;
      gap: 15px;
    }
  }
`;

export const StyledMovieName = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 100%;
  color: ${colors.white50};
  margin: 30px 0 34px 0;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 20px;
    margin: 18px 0 40px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 20px;
    margin: 18px 0 40px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 18px;
    margin: 20px 0 8px 0;
  }
`;

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
