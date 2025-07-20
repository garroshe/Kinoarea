import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import type { RootState } from "@/app/store";
import { SearchBlock } from "@/features/searchBlock/ui/SearchBlock";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { mapModalName } from "@/shared/utils/map-modal-name";
import { BurgerMenu } from "@/widgets/header/ui/BurgerMenu/BurgerMenu";
import { useModal } from "@/widgets/Modal/context/modalContext";

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

  const auth = useSelector((state: RootState) => state.auth);
  const { openModal } = useModal();

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
          {auth.user ? (
            <HeaderUser userName={auth.user?.userName} avatar={auth.user?.avatar} />
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
