import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledNewTrailer = styled.section`
  margin-bottom: 75px;

  .position {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  a {
    display: flex;
    gap: 27px;
    align-items: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${colors.white50};
    cursor: pointer;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const StyledMarks = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledTrailerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;
`;

export const StyledLeftBlock = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
`;

export const StyledTrailerTitle = styled.h3`
  font-weight: 900;
  font-size: 45px;
  line-height: 100%;
  letter-spacing: 0;
  color: ${colors.white50};

  iframe {
    width: 100% !important;
    height: 400px !important;
  }
`;

export const StyledTrailer = styled.div`
  position: relative;
  margin-bottom: 26px;
`;
