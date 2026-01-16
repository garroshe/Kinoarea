import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media.tsx";

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

  ${mapDeviceToMedia.mobileOnly} {
    gap: 6px;
    p {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
