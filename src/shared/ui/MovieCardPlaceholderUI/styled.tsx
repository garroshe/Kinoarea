import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledMovieCardPlaceholder = styled.div<{ $size: "small" | "large" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 20px 10px;
  background: ${colors.blue800};

  .poster-icon {
    width: ${(props) => (props.$size === "small" ? 50 : 70)}px;
    margin: 0 auto;
  }

  .logotype-icon {
    margin: 0 auto;
  }
`;

export const StyledDescription = styled.p<{ $size: "small" | "large" }>`
  font-weight: 700;
  font-size: ${(props) => (props.$size === "small" ? 16 : 26)}px;
  line-height: 100%;
  text-align: center;
  margin: ${(props) => (props.$size === "small" ? 20 : 50)}px 0 ${(props) => (props.$size === "small" ? 25 : 50)}px 0;
  color: ${colors.grey800};
`;
