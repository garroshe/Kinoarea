import { NavLink } from "react-router-dom";

import { colors } from "@/shared/constants/style";

import { NAV_BAR_LINK } from "./constants";
import { StyledNavBar } from "./styled";

export const NavBar = () => {
  return (
    <StyledNavBar>
      {NAV_BAR_LINK.map((link) => (
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? colors.white50 : colors.white400,
          })}
          to={link.to}
          key={link.to}
        >
          {link.title}
        </NavLink>
      ))}
    </StyledNavBar>
  );
};
