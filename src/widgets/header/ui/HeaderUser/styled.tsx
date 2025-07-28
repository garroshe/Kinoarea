import styled from "styled-components";

import { breakpoints, colors } from "@/shared/constants/style";

export const StyledHeaderUserContainer = styled.div`
  position: relative;
`;

export const StyledHeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const StyledHeaderUserName = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 167%;
  color: ${colors.white50};
`;

export const StyledAvatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 45px;
    height: 45px;
  }
`;

export const StyledAvatarWrapper = styled.div`
  position: relative;
`;

export const StyledCircleDisturb = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${colors.green500};
  border: 1px solid ${colors.blue900};
`;
