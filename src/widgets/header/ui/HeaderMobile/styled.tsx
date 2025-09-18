import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

export const StyledTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

export const StyledLeftBlock = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: ${colors.white50};
  width: 28px;
  height: 27px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  span {
    width: 14px;
    height: 1px;
    background: ${colors.blue500};
  }
`;

export const StyledCenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  .mobile-logotype {
    max-width: 94px;
    max-height: 24px;
  }
`;

export const StyledButton = styled.button`
  background: ${colors.blue500};
  line-height: 167%;
  font-weight: 700;
  border: none;
  width: 100px;
  height: 42px;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 ${colors.blue400};
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.tabletOnly} {
    width: 100px;
    height: 42px;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 ${colors.blue400};
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 66px;
    height: 27px;
    border-radius: 5px;
    font-size: 11px;
    box-shadow: 0 0 5px 0 ${colors.blue400};
  }
`;
