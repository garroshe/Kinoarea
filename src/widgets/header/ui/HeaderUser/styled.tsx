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

export const StyledHeaderUserDropdown = styled.div`
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 143px;
  border-radius: 10px;
  background-color: ${colors.blue800};
  padding: 14px 18px 20px 20px;

  @media (max-width: ${breakpoints.tablet}) {
    left: -30%;
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    font-size: 13px;
    line-height: 167%;
    color: ${colors.grey400};
    cursor: pointer;
    margin-top: 9px;

    svg {
      width: 6px;
      height: 6px;
    }
  }
`;

export const StyledDropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style-type: none;

  li {
    font-weight: 400;
    font-size: 13px;
    line-height: 167%;
    cursor: pointer;
    color: ${colors.white50};
  }
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
