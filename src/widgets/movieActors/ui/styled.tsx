import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMovieActors = styled.div`
  margin-top: 48px;
  margin-bottom: 82px;
`;

export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  gap: 45px;
  margin-top: 60px;
`;

export const StyledAllActors = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
