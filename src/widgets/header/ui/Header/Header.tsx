import { useSelector } from "react-redux";

import type { RootState } from "../../../../app/store";
import { SearchUI } from "../../../../shared/ui/SearchUI/SearchUI";
import { Social } from "../../../../shared/ui/Social/Social";
import { mapModalName } from "../../../../shared/utils/map-modal-name";
import { useModal } from "../../../Modal/context/modalContext";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { HeaderUser } from "./ui/HeaderUser/HeaderUser";
import { StyledButton, StyledHeader, StyledLeftBlock, StyledRightBlock } from "./styled";

export const Header = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(mapModalName.login);
  };

  return (
    <div className="container">
      <StyledHeader>
        <StyledLeftBlock>
          <Logo />
          <Social />
        </StyledLeftBlock>
        <NavBar />
        <StyledRightBlock>
          <SearchUI />
          {auth.user ? (
            <HeaderUser userName={auth.user?.userName} avatar={auth.user?.avatar} />
          ) : (
            <StyledButton onClick={handleOpenModal}>Увійти</StyledButton>
          )}
        </StyledRightBlock>
      </StyledHeader>
    </div>
  );
};
