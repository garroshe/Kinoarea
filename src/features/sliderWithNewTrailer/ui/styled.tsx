import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledSlider = styled.div`
  .swiper-slide {
    width: 342px !important;
  }

  img {
    max-width: 342px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};
  margin-top: 11px;
`;

export const StyledPlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  cursor: pointer;

  .icon-play {
    width: 35px;
    height: 31px;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;

  .block {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    width: 100%;
    height: 192px;

    &.active {
      background: ${colors.blue500};
      opacity: 60%;
    }
  }
`;
