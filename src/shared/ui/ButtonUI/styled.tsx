import styled from 'styled-components';
import { colors } from '../../constants/style.ts';

export const StyledButtonUI = styled.button`
  background: ${colors.blue500};
  width: 138px;
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px ${colors.blue400};
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  color: ${colors.white50};
  cursor: pointer;
`;
