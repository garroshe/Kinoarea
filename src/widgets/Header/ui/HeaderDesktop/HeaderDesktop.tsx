import { Link } from "react-router-dom";

import { Search } from "@/features/Search";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import type { UserType } from "./types";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export type HeaderDesktopPropsType = {
  user: UserType | null;
  isUserLoading: boolean;
  openModal: () => void;
};

export const HeaderDesktop = ({ user, isUserLoading, openModal }: HeaderDesktopPropsType) => {
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
