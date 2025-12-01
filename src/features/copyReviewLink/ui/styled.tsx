import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media.tsx";

export const StyledLink = styled.span`
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;

  p {
    color: ${colors.white50};
    font-size: 15px;
    font-weight: 600;
    line-height: 100%;
    text-decoration-line: underline;
  }

  .check {
    width: 14px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 6px;

    p {
      font-size: 13px;
    }

    .check {
      width: 16px;
    }
  }
`;
