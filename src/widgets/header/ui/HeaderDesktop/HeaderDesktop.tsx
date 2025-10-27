import { Link } from "react-router-dom";

import { Search } from "@/features/search";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import type { HeaderDesktopProps } from "@/widgets/header/ui/HeaderDesktop/types";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export const HeaderDesktop = ({ user, isUserLoading, openModal }: HeaderDesktopProps) => {
  return (
    <ContainerUI>
      <StyledHeader>
        <StyledLeftBlock>
          <Link to={routesBook.main()}>
            <SvgIcon icon={icons.logotype} />
          </Link>
          <SocialUI />
        </StyledLeftBlock>
        <NavBar />
        <StyledRightBlock>
          <Search />
          {user ? (
            <HeaderUser
              userName={user?.userName}
              loginName={user?.loginName}
              lastName={user?.lastName}
              avatar={user?.avatar}
            />
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
