import { forwardRef } from "react";

import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { OPTION_DROPDOWN_LIST } from "./model/constants";
import type { IHeaderUserDropDownProps } from "./model/types";
import { StyledDropdownList, StyledHeaderUserDropdown } from "./styled";

export const HeaderUserDropDown = forwardRef<HTMLDivElement, IHeaderUserDropDownProps>(({ logout }, dropDownRef) => {
  return (
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
  );
});
