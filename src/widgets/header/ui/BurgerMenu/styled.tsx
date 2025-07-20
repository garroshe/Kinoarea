import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledBurgerMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: rgba(30, 37, 56, 0.9);
  padding: 50px;
  display: flex;
  justify-content: center;

  .burger-dagger {
    position: absolute;
    top: 40px;
    right: 28px;
    height: 12px;
    width: 12px;
    cursor: pointer;
  }

  .burger-logotype {
    width: 94px;
    height: 24px;
    margin-bottom: 14px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    text-align: center;
    a {
      font-weight: 700;
      font-size: 13px;
      line-height: 42px;
      color: ${colors.white50};
    }
  }
`;
