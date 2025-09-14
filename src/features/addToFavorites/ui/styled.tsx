import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledAddToFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 5px;
  background: ${colors.blue800};
  cursor: pointer;
`;
