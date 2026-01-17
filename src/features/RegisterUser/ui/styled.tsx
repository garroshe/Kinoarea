import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 422px;

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

    label {
      font-size: 12px;
    }
  }
`;

export const StyledCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 14px;
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  margin-bottom: 34px;

  ${mapDeviceToMedia.mobileOnly} {
    margin-bottom: 25px;
    font-size: 26px;
  }
`;
