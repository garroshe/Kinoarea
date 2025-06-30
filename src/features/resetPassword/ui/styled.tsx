import styled from "styled-components";

import { colors } from "../../../shared/constants/style";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const StyledMessage = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 167%;
  color: ${colors.white50};
  margin: 20px 0;
`;
