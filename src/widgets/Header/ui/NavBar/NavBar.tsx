import { NavLink } from "react-router-dom";

import { colors } from "@/shared/constants/style";

import { NAVBAR_PATH } from "./constants";
import { StyledNavBar } from "./styled";

export const NavBar = () => {
  return (
    <StyledNavBar>
      {NAVBAR_PATH.map((item, i) => {
        return (
          <NavLink
            key={i}
            to={item.to}
            style={({ isActive }) => ({
              color: isActive ? colors.white50 : colors.white400,
            })}
          >
            {item.label}
          </NavLink>
        );
      })}
    </StyledNavBar>
  );
};
