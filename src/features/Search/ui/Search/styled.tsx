import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 52px;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  background: ${colors.white50};
  border-radius: 10px;

  ${mapDeviceToMedia.tabletOnly} {
    width: 43px;
    height: 41px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 28px;
    height: 27px;
  }
`;

export const StyledSearchModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

export const StyledSearchModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 874px;
  padding-top: 50px;
  margin: 0 auto;

  .logo-icon {
    ${mapDeviceToMedia.tabletOnly} {
      width: 100px;
    }

    ${mapDeviceToMedia.mobileOnly} {
      width: 100px;
    }
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 700px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 500px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 300px;
    padding-top: 20px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 874px;
  height: 70px;
  background: ${colors.white50};
  border-radius: 10px;
  padding: 0 10px 0 32px;

  .filters-icon {
    cursor: pointer;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 700px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 500px;
    height: 60px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 300px;
    height: 60px;
  }
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  background: ${colors.white50};
  border: none;
  height: 52px;
  outline: none;

  ${mapDeviceToMedia.tabletOnly} {
    height: 50px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 50px;
  }
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${colors.yellow500};
  border: none;
  border-radius: 10px;
  margin-left: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 50px;
    height: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 50px;
    height: 40px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 500px;
  overflow-y: scroll;
  padding: 10px;
  margin-top: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.blue900};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.blue500};
    border-radius: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 10px;
  }
`;

export const StyledListTitle = styled.h2`
  color: ${colors.white50};
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 10px;

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 0;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 0;
    font-size: 20px;
  }
`;

export const StyledTopBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 77px;

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 30px;
    gap: 20px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 30px;
    gap: 20px;
  }
`;
