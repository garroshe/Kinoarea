import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import type { RootState } from "@/app/store";
import { SearchBlockUI } from "@/shared/ui/SearchBlockUI/SearchBlockUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { mapModalName } from "@/shared/utils/map-modal-name";
import { useModal } from "@/widgets/Modal/context/modalContext";

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
          <Link to="/">
            <SvgIcon icon={icons.logotype} />
          </Link>
          <SvgIcon icon={icons.social} />
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
