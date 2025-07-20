import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/app/store";
import { logout } from "@/entities/auth/slice";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { OPTION_DROPDOWN_LIST } from "./constants";
import type { IHeaderUserProps } from "./types";
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
  const dispatch = useDispatch<AppDispatch>();
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const headerUserRef = useRef<HTMLDivElement | null>(null);

  const isTabletOrSmaller = useMediaQuery("(max-width: 768px)");

  const handleOpenDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
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

          <span data-testid="exit-test-id" onClick={handleLogout}>
            <SvgIcon icon="dagger" />
            Вихід
          </span>
        </StyledHeaderUserDropdown>
      )}
    </StyledHeaderUserContainer>
  );
};
