import styled from "styled-components";

import { breakpoints } from "@/shared/constants/style";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 422px;

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
      font-size: 26px;
    }

    label {
      font-size: 12px;
    }
  }
`;

export const StyledCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 14px;
`;
