import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMessageModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 65px;
  border-radius: 10px;
  background: ${colors.blue500};
  font-weight: 600;
  font-size: 17px;
  line-height: 167%;
  border: none;
  color: ${colors.white50};
  cursor: pointer;
`;

export const StyledMessage = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 169%;
  color: ${colors.white50};
  text-align: center;
`;
