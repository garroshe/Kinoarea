import { useState } from "react";
import { Link } from "react-router-dom";

import { useModal } from "@/app/providers/modal/ui/ModalProvider";
import { useUser } from "@/app/providers/user/ui/UserContextProvider";
import { SearchBlock } from "@/features/searchBlock/ui/SearchBlock";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { mapModalName } from "@/shared/utils/map-modal-name";
import { BurgerMenu } from "@/widgets/header/ui/BurgerMenu/BurgerMenu";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import {
  StyledBurgerMenu,
  StyledButton,
  StyledCenterBlock,
  StyledHeader,
  StyledLeftBlock,
  StyledTopBlock,
} from "./styled";

export const HeaderMobile = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const { openModal } = useModal();
  const { user } = useUser();

  const handleOpenModal = () => {
    openModal(mapModalName.login);
  };

  const handleBurgerActive = () => {
    setBurgerActive((prev) => !prev);
  };

  const isMobile = useMediaQuery("(max-width: 480px)");

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
            <SearchBlock />
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
            <StyledButton onClick={handleOpenModal}>Увійти</StyledButton>
          )}
        </StyledTopBlock>
        {!isMobile ? <NavBar /> : null}
        {burgerActive && <BurgerMenu onClose={handleBurgerActive} />}
      </StyledHeader>
    </ContainerUI>
  );
};
