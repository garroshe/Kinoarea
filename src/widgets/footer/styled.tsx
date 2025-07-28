import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 50px 0;

  ${mapDeviceToMedia.laptopOnly} {
    padding: 40px 0 25px 0;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 34px 0 26px 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 25px 0 29px 0;
  }
`;

export const StyledRoot = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 119%;
  color: ${colors.blue50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 13px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
  }
`;

export const StyledPrivacyAndPolicy = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 119%;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0;
  color: ${colors.blue50};
  text-transform: uppercase;
  margin-top: 26px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 13px;
    margin-top: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
    margin-top: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    margin-top: 10px;
  }
`;

export const StyledWrapper = styled.div`
  background: ${colors.blue700};
`;
