import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledActorInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 90px 0;
  flex-direction: row;

  ${mapDeviceToMedia.tabletOnly} {
    padding: 40px 0;
    flex-direction: row;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 30px 0;
    flex-direction: column;
  }
`;

export const StyledImage = styled.div`
  width: 350px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 270px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 270px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 230px;
  }
`;

export const StyledName = styled.h2`
  color: ${colors.white50};
  font-size: 65px;
  font-weight: 900;
  line-height: 78px;
  margin-top: 3px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
    line-height: 48px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
    line-height: 48px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const StyledAlsoKnowsAs = styled.h3`
  color: ${colors.white50};
  font-size: 25px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 12px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 20px;
    margin-top: 3px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 20px;
    margin-top: 3px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 20px;
    margin-top: 3px;
    line-height: 20px;
    margin-bottom: 18px;
  }
`;

export const StyledListKeys = styled.ul`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 16px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
  }
`;

export const StyledListValue = styled.ul`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: ${colors.yellow800};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 16px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 13px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 13px;
    width: 220px;
  }
`;

export const StyledTable = styled.div`
  display: flex;
  gap: 30px;
  align-items: end;
  margin-top: 18px;
  max-width: 380px;

  li {
    margin-bottom: 15px;
  }

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 28px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 28px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 20px;
  }
`;

export const StyledTabs = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;

  ${mapDeviceToMedia.laptopOnly} {
    margin-top: 28px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 28px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 20px;
  }
`;

export const StyledTab = styled.span`
  font-size: 19px;
  font-weight: 500;
  line-height: 23px;
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 15px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
  }
`;

export const StyledBio = styled.p`
  color: ${colors.white400};
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  max-width: 380px;
  margin-top: 18px;
  width: 389px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 15px;
    width: 322px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 15px;
    width: 322px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
    width: 300px;
  }
`;
