import { Link } from "react-router-dom";

import { routesBook } from "@/app/routing/routesBook";
import { Search } from "@/features/search/Search";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import type { HeaderDesktopProps } from "@/widgets/header/ui/HeaderDesktop/model/types";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export const HeaderDesktop = ({ user, isUserLoading, openModal }: HeaderDesktopProps) => {
  return (
    <ContainerUI>
      <StyledHeader>
        <StyledLeftBlock>
          <Link to={routesBook.main()}>
            <SvgIcon icon="logotype" />
          </Link>
          <SocialUI />
        </StyledLeftBlock>
        <NavBar />
        <StyledRightBlock>
          <Search />
          {user ? (
            <HeaderUser userName={user?.userName} avatar={user?.avatar} />
          ) : isUserLoading ? (
            <SpinnerUI size="large" />
          ) : (
            <StyledButton onClick={openModal}>Увійти</StyledButton>
          )}
        </StyledRightBlock>
      </StyledHeader>
    </ContainerUI>
  );
};
