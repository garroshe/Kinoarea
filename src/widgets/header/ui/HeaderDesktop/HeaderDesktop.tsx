import { Link } from "react-router-dom";

import { useModal } from "@/app/providers/modal/ui/ModalProvider";
import { useUser } from "@/app/providers/user/ui/UserContextProvider";
import { SearchBlock } from "@/features/searchBlock/ui/SearchBlock";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export const HeaderDesktop = () => {
  const { openModal } = useModal();
  const { user, isUserLoading } = useUser();

  const handleOpenModal = () => {
    openModal(mapModalName.login);
  };

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
          <SearchBlock />
          {user ? (
            <HeaderUser userName={user?.userName} avatar={user?.avatar} />
          ) : isUserLoading ? (
            <SpinnerUI size="large" />
          ) : (
            <StyledButton onClick={handleOpenModal}>Увійти</StyledButton>
          )}
        </StyledRightBlock>
      </StyledHeader>
    </ContainerUI>
  );
};
