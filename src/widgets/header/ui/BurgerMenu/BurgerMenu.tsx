import { Link } from "react-router-dom";

import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { BURGER_MENU_PATH } from "./constants";
import { StyledBurgerMenu, StyledList } from "./styled";

export const BurgerMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <StyledBurgerMenu>
      <SvgIcon icon="dagger" className="burger-dagger" onClick={onClose} />
      <StyledList>
        <SvgIcon icon="logotype" className="burger-logotype" />
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
