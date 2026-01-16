import { Link } from "react-router-dom";

import { Search } from "@/features/Search";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import type { HeaderMobileProps } from "./types";
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
              <SvgIcon className="mobile-logotype" icon={icons.logotype} />
            </Link>
            <SocialUI />
          </StyledCenterBlock>
          {user ? (
            <HeaderUser
              userName={user?.userName}
              avatar={user?.avatar}
              lastName={user?.lastName}
              loginName={user?.loginName}
            />
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
