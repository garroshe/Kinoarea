import { useEffect, useRef, useState } from "react";

import { useUser } from "@/app/providers/user/ui/UserContextProvider";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import type { IHeaderUserProps } from "./model/types";
import { HeaderUserDropDown } from "./ui/HeaderUserDropDown/HeaderUserDropDown";
import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledCircleDisturb,
  StyledHeaderUser,
  StyledHeaderUserContainer,
  StyledHeaderUserName,
} from "./styled";

export const HeaderUser = ({ userName, avatar }: IHeaderUserProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const headerUserRef = useRef<HTMLDivElement | null>(null);

  const { logout } = useUser();

  const handleOpenDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        headerUserRef.current &&
        !dropDownRef.current.contains(event.target as Node) &&
        !headerUserRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isTabletOrSmaller = useMediaQuery("(max-width: 768px)");

  return (
    <StyledHeaderUserContainer>
      <StyledHeaderUser ref={headerUserRef} onClick={handleOpenDropdown} data-testid="headerUser">
        {!isTabletOrSmaller && <SvgIcon icon={icons.collapseIcon} />}
        {!isTabletOrSmaller && <StyledHeaderUserName>{userName}</StyledHeaderUserName>}
        {avatar ? (
          <StyledAvatarWrapper>
            <StyledAvatar src={avatar} alt="avatar" />
            <StyledCircleDisturb />
          </StyledAvatarWrapper>
        ) : (
          <StyledAvatarWrapper>
            <SvgIcon icon={icons.avatarMale} />
            <StyledCircleDisturb />
          </StyledAvatarWrapper>
        )}
      </StyledHeaderUser>

      {isOpen && <HeaderUserDropDown logout={logout} ref={dropDownRef} />}
    </StyledHeaderUserContainer>
  );
};
