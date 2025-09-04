import { Link } from "react-router-dom";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { BURGER_MENU_PATH } from "./model/constants";
import type { IBurgerMenuProps } from "./model/types";
import { StyledBurgerMenu, StyledList } from "./styled";

export const BurgerMenu = ({ onClose }: IBurgerMenuProps) => {
  return (
    <StyledBurgerMenu>
      <SvgIcon icon={icons.dagger} className="burger-dagger" onClick={onClose} />
      <StyledList>
        <SvgIcon icon={icons.logotype} className="burger-logotype" />
        {BURGER_MENU_PATH.map((link) => (
          <li key={link.to}>
            <Link onClick={onClose} to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </StyledList>
    </StyledBurgerMenu>
  );
};
