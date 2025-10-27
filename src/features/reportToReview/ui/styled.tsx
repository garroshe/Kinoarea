import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledReportToReview = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;

  p {
    color: ${colors.red500};
    font-size: 15px;
    font-weight: 600;
    line-height: 100%;
    text-decoration-line: underline;
  }
`;
