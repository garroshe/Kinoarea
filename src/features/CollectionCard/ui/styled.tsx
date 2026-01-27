import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledCollectionCard = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 230px;
  width: 100%;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${colors.grey400};

  ${mapDeviceToMedia.laptopOnly} {
    gap: 20px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 20px;
    height: 200px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 10px;
    height: 120px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  ${mapDeviceToMedia.tabletOnly} {
    flex-direction: column;
    align-items: start;
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    align-items: start;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  font-size: 25px;
  font-weight: 800;
  line-height: 30px;
  background: ${colors.blue800};
  border-radius: 10px;
  cursor: pointer;

  color: ${colors.white50};

  span {
    color: ${colors.blue500};
  }

  &:hover {
    opacity: 0.6;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 200px;
    height: 200px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 120px;
    height: 120px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${colors.white50};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 20px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 20px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const StyledSubTitle = styled.h3`
  color: ${colors.yellow500};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 18px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 12px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 8px;
    font-size: 12px;
  }
`;

export const StyledButton = styled.button`
  width: 224px;
  height: 70px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px 0 ${colors.blue500};
  background: ${colors.blue500};
  color: ${colors.white50};
  font-size: 18px;
  font-weight: 700;
  line-height: 166.5%;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 190px;
    height: 60px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 140px;
    height: 54px;
    font-size: 15px;
    margin-top: 16px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 100px;
    height: 40px;
    font-size: 12px;
    margin-top: 4px;
  }
`;
