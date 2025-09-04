import { useState } from "react";

import { useModal } from "@/app/providers/modal/ui/ModalProvider";
import { useUser } from "@/app/providers/user/ui/UserContextProvider";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { HeaderDesktop } from "../HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

export const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const { openModal } = useModal();
  const { user, isUserLoading } = useUser();

  const handleOpenModal = () => {
    openModal(mapModalName.login);
  };

  const handleBurgerActive = () => {
    setBurgerActive((prev) => !prev);
  };

  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTabletOrSmaller = useMediaQuery("(max-width: 1279px)");

  return isTabletOrSmaller ? (
    <HeaderMobile
      openModal={handleOpenModal}
      isMobile={isMobile}
      handleBurgerActive={handleBurgerActive}
      burgerActive={burgerActive}
      user={user}
    />
  ) : (
    <HeaderDesktop user={user} isUserLoading={isUserLoading} openModal={handleOpenModal} />
  );
};
