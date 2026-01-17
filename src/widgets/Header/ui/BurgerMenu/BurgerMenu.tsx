import { Link } from "react-router-dom";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { BURGER_MENU_PATH } from "./constants";
import { StyledBurgerMenu, StyledList } from "./styled";

export type BurgerMenuPropsType = {
  onClose: () => void;
};

export const BurgerMenu = ({ onClose }: BurgerMenuPropsType) => {
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
