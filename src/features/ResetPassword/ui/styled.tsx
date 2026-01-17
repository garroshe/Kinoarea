import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  ${mapDeviceToMedia.mobileOnly} {
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
  }
`;

export const StyledMessage = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 167%;
  color: ${colors.white50};
  margin: 20px 0;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 14px;
    margin: 10px 0;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${colors.white50};
  margin-bottom: 34px;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 24px;
  }
`;
