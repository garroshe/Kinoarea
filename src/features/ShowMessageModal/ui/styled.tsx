import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMessageModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 65px;
  border-radius: 10px;
  background: ${colors.blue500};
  font-weight: 600;
  font-size: 17px;
  line-height: 167%;
  border: none;
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.mobileOnly} {
    width: 180px;
    height: 55px;
    font-size: 14px;
  }
`;

export const StyledMessage = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 169%;
  color: ${colors.white50};
  text-align: center;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 16px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${colors.white50};

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 24px;
  }
`;
