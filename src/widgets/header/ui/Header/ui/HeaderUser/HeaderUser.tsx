import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "../../../../../../app/store";
import { logout } from "../../../../../../features/auth/model/slice";
import { AvatarMaleUI } from "../../../../../../shared/ui/icons/AvatarMaleUI/AvatarMaleUI";
import { CollapseIconUI } from "../../../../../../shared/ui/icons/CollapseIconUI/ColapseIconUI";
import { DaggerUI } from "../../../../../../shared/ui/icons/DaggerUI/DaggerUI";
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
      <StyledHeaderUser ref={headerUserRef} onClick={handleOpenDropdown}>
        <CollapseIconUI />
        <StyledHeaderUserName>{userName}</StyledHeaderUserName>
        {avatar ? <StyledAvatar src={avatar} alt="avatar" /> : <AvatarMaleUI />}
      </StyledHeaderUser>

      {isOpen && (
        <StyledHeaderUserDropdown ref={dropDownRef}>
          <StyledDropdownList>
            {OPTION_DROPDOWN_LIST.map((item) => {
              return <li key={item.key}>{item.label}</li>;
            })}
          </StyledDropdownList>

          <span onClick={handleLogout}>
            <DaggerUI />
            Вихід
          </span>
        </StyledHeaderUserDropdown>
      )}
    </StyledHeaderUserContainer>
  );
};
