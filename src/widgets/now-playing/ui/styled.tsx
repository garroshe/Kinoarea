import styled from "styled-components";

import { colors } from "../../../shared/constants/style";

export const StyledNowPlaying = styled.section`
  margin-top: 50px;
  margin-bottom: 54px;
`;

export const StyledCentered = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  color: ${colors.white50};
`;

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 340px);
  gap: 20px;
  justify-content: center;
  margin-top: 63px;
`;

export const StyledNowPlayingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDivider = styled.div`
  height: 2px;
  width: 52px;
  background: ${colors.white50};
`;
