import { useSelector } from "react-redux";

import type { RootState } from "../../../../app/store";
import { LogotypeUI } from "../../../../shared/ui/icons/LogotypeUI/LogotypeUI";
import { SocialUI } from "../../../../shared/ui/icons/SocialUI/SocialUI";
import { SearchBlockUI } from "../../../../shared/ui/SearchBlockUI/SearchBlockUI";
import { mapModalName } from "../../../../shared/utils/map-modal-name";
import { useModal } from "../../../Modal/context/modalContext";
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
          <LogotypeUI />
          <SocialUI />
        </StyledLeftBlock>
        <NavBar />
        <StyledRightBlock>
          <SearchBlockUI />
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
