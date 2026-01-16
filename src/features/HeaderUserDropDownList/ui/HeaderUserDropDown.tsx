import { forwardRef } from "react";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { OPTION_DROPDOWN_LIST } from "../const";
import { StyledDropdownList, StyledHeaderUserDropdown } from "./styled";

export type HeaderUserDropDownPropsType = {
  logout: () => void;
};

export const HeaderUserDropDown = forwardRef<HTMLDivElement, HeaderUserDropDownPropsType>(({ logout }, dropDownRef) => {
  return (
    <StyledHeaderUserDropdown data-testid="dropdown-test-id" ref={dropDownRef}>
      <StyledDropdownList>
        {OPTION_DROPDOWN_LIST.map((item) => {
          return <li key={item.key}>{item.label}</li>;
        })}
      </StyledDropdownList>

      <span data-testid="exit-test-id" onClick={logout}>
        <SvgIcon icon={icons.dagger} />
        Вихід
      </span>
    </StyledHeaderUserDropdown>
  );
});
