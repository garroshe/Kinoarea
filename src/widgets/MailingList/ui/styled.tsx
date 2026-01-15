import styled from "styled-components";

import bg from "@/shared/assets/image/email-send-bg.jpg";
import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";
import type { IStyledBtnProps } from "@/widgets/MailingList/model/types";

export const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.blue700};
  padding-top: 50px;
`;

export const StyledMailingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-image: linear-gradient(rgba(29, 58, 160, 0.9), rgba(29, 58, 160, 0.9)), url(${bg});
  padding: 76px 0 106px 0;
  border-radius: 10px;
  text-align: center;

  ${mapDeviceToMedia.laptopOnly} {
    padding: 50px 0;

    h2 {
      font-size: 35px;
    }
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 32px 0 42px 0;

    h2 {
      font-size: 35px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 25px 22px;

    h2 {
      font-size: 25px;
    }
  }
`;

export const StyledDescribe = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 140%;
  color: ${colors.white50};
  width: 700px;
  text-align: center;

  ${mapDeviceToMedia.laptopOnly} {
    width: 500px;
    font-size: 17px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 500px;
    font-size: 17px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 100%;
    font-size: 15px;
  }
`;

export const StyledWrapperInputAndBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 34px 0 22px 0;

  ${mapDeviceToMedia.laptopOnly} {
    margin: 16px 0 25px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin: 16px 0 25px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    margin: 29px 0 20px 0;
  }
`;

export const StyledInput = styled.input`
  width: 425px;
  height: 71px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 167%;
  color: ${colors.blue700};
  background: ${colors.white50};
  border: none;
  padding: 22px 27px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 378px;
    height: 62px;
    font-size: 15px;
    padding: 19px 27px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 378px;
    height: 62px;
    font-size: 15px;
    padding: 19px 27px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 284px;
    height: 62px;
    font-size: 15px;
    padding: 19px 27px;
  }
`;

export const StyledBtn = styled.button<IStyledBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.$disabled ? colors.yellow800 : colors.yellow500)};
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  width: 182px;
  height: 71px;
  padding: 0 13px;
  text-align: center;
  color: ${colors.blue700};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  ${mapDeviceToMedia.laptopOnly} {
    width: 164px;
    height: 62px;
    font-size: 16px;
    padding: 18px 34px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 164px;
    height: 62px;
    font-size: 16px;
    padding: 18px 34px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 283px;
    height: 62px;
    font-size: 15px;
    padding: 18px 34px;
  }
`;
