import styled from "styled-components";

import { breakpoints, colors } from "@/shared/constants/style";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 300px;

    input {
      height: 55px;
      font-size: 14px;
    }

    button {
      width: 300px;
      height: 55px;
      font-size: 14px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const StyledMessage = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 167%;
  color: ${colors.white50};
  margin: 20px 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin: 10px 0;
  }
`;
