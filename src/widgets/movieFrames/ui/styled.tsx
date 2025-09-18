import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMovieFrames = styled.div`
  margin-top: 97px;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 32px;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    color: ${colors.white50};
  }
`;

export const StyledMovieName = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 100%;
  color: ${colors.white50};
  margin: 30px 0 34px 0;
`;

export const StyledWrapperFrames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  img {
    cursor: pointer;
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
