import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledErrorPage = styled.section`
  padding: 106px 0 134px 0;
  color: ${colors.white50};
  height: 100%;

  h2 {
    font-size: 150px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 100%;
    text-align: center;
  }

  h3 {
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 100%;
    text-align: center;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 169%;
    margin: 26px 0 32px 0;
    text-align: center;
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const StyledBackBtn = styled.button`
  width: 244px;
  height: 64px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  letter-spacing: 0;
  border: 0;
  background: ${colors.blue500};
  box-shadow: 0 0 7px 0 ${colors.blue400};
  color: ${colors.white50};
  cursor: pointer;

  &:hover {
    background: ${colors.blue400};
  }
`;

export const StyledSearchBtn = styled.button`
  width: 244px;
  height: 64px;
  border-radius: 10px;
  border: 2px solid ${colors.white50};
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  letter-spacing: 0;
  background: transparent;
  color: ${colors.white50};
  cursor: pointer;
`;
