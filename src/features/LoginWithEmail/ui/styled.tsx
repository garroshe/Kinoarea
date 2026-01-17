import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledLoginForm = styled.form`
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
  }
`;

export const StyledRegisterButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  padding: 13px;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 167%;
  color: ${colors.white50};
  background: ${colors.blue900};
  border: none;
  margin: 14px 0 16px 0;
  cursor: pointer;
`;

export const StyledResetPassword = styled.a`
  font-weight: 500;
  font-size: 17px;
  line-height: 167%;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  letter-spacing: 0;
  text-decoration-thickness: 0;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  color: ${colors.blue500};
  margin-bottom: 20px;
  cursor: pointer;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 14px;
  }
`;

export const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledSocialItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: ${colors.blue900};
  border-radius: 10px;
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: ${colors.blue500};
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 38px;
    height: 38px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${colors.white50};
  margin-bottom: 34px;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 26px;
  }
`;
