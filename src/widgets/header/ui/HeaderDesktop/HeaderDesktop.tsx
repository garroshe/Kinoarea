import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import type { RootState } from "@/app/store";
import { SearchBlock } from "@/features/searchBlock/ui/SearchBlock";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { mapModalName } from "@/shared/utils/map-modal-name";
import { useModal } from "@/widgets/Modal/context/modalContext";

import { HeaderUser } from "../HeaderUser/HeaderUser";
import { NavBar } from "../NavBar/NavBar";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export const HeaderDesktop = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const { openModal } = useModal();

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
          {auth.user ? (
            <HeaderUser userName={auth.user?.userName} avatar={auth.user?.avatar} />
          ) : (
            <StyledButton onClick={handleOpenModal}>Увійти</StyledButton>
          )}
        </StyledRightBlock>
      </StyledHeader>
    </ContainerUI>
  );
};
