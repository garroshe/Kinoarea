import { Link } from "react-router-dom";

import { Search } from "@/features/search/Search";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import type { HeaderMobileProps } from "./model/types";
import {
  StyledBurgerMenu,
  StyledButton,
  StyledCenterBlock,
  StyledHeader,
  StyledLeftBlock,
  StyledTopBlock,
} from "./styled";

export const HeaderMobile = ({ isMobile, handleBurgerActive, burgerActive, user, openModal }: HeaderMobileProps) => {
  return (
    <ContainerUI>
      <StyledHeader>
        <StyledTopBlock>
          <StyledLeftBlock>
            {isMobile ? (
              <StyledBurgerMenu onClick={handleBurgerActive}>
                <span />
                <span />
                <span />
              </StyledBurgerMenu>
            ) : null}
            <Search />
          </StyledLeftBlock>
          <StyledCenterBlock>
            <Link to={routesBook.main()}>
              <SvgIcon className="mobile-logotype" icon="logotype" />
            </Link>
            <SocialUI />
          </StyledCenterBlock>
          {user ? (
            <HeaderUser userName={user?.userName} avatar={user?.avatar} />
          ) : (
            <StyledButton onClick={openModal}>Увійти</StyledButton>
          )}
        </StyledTopBlock>
        {!isMobile ? <NavBar /> : null}
        {burgerActive && <BurgerMenu onClose={handleBurgerActive} />}
      </StyledHeader>
    </ContainerUI>
  );
};
