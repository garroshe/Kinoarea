import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMovieTabs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 100%;
    color: ${colors.white400};
  }

  .active {
    width: 160px;
    height: 67px;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 #3657cbcc;
    background: ${colors.blue500};
    color: ${colors.white50};
  }
`;
