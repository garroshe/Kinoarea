import { useEffect, useRef, useState } from "react";

import { useUser } from "@/app/providers/user";
import { HeaderUserDropDown } from "@/features/HeaderUserDropDownList";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledCircleDisturb,
  StyledHeaderUser,
  StyledHeaderUserContainer,
  StyledHeaderUserName,
} from "./styled";

export type HeaderUserPropsType = {
  userName: string | undefined;
  avatar: string | undefined;
  lastName: string | undefined;
  loginName: string | undefined;
};

export const HeaderUser = ({ userName, loginName, lastName, avatar }: HeaderUserPropsType) => {
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
        {!isTabletOrSmaller && (
          <StyledHeaderUserName>{userName || loginName || lastName || "Анонім"}</StyledHeaderUserName>
        )}
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
