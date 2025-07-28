import { useEffect, useRef, useState } from "react";

import { useUser } from "@/app/providers/user/ui/UserContextProvider";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { OPTION_DROPDOWN_LIST } from "./model/constants";
import type { IHeaderUserProps } from "./model/types";
import {
  StyledAvatar,
  StyledDropdownList,
  StyledHeaderUser,
  StyledHeaderUserContainer,
  StyledHeaderUserDropdown,
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
        {!isTabletOrSmaller ? <SvgIcon icon="collapseIcon" /> : null}
        {!isTabletOrSmaller ? <StyledHeaderUserName>{userName}</StyledHeaderUserName> : null}
        {avatar ? <StyledAvatar src={avatar} alt="avatar" /> : <SvgIcon icon="avatarMale" />}
      </StyledHeaderUser>

      {isOpen && (
        <StyledHeaderUserDropdown data-testid="dropdown-test-id" ref={dropDownRef}>
          <StyledDropdownList>
            {OPTION_DROPDOWN_LIST.map((item) => {
              return <li key={item.key}>{item.label}</li>;
            })}
          </StyledDropdownList>

          <span data-testid="exit-test-id" onClick={logout}>
            <SvgIcon icon="dagger" />
            Вихід
          </span>
        </StyledHeaderUserDropdown>
      )}
    </StyledHeaderUserContainer>
  );
};
