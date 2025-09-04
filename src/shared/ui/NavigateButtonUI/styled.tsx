import styled from "styled-components";

import { colors } from "../../constants/style";

export const StyledNavigateButtonUI = styled.button`
  display: block;
  width: 200px;
  height: 70px;
  border: 2px solid ${colors.white50};
  background: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 167%;
  letter-spacing: 0;
  color: ${colors.white50};
  text-align: center;
  border-radius: 10px;
  margin: 50px auto 0 auto;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 ${colors.white50};
`;
