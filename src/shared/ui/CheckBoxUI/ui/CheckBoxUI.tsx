import { forwardRef } from "react";

import { icons, SvgIcon } from "../../SvgIcon/SvgIcon";
import type { ICheckBoxUIProps } from "../model/type";
import { StyledCheckBoxContainer, StyledCheckBoxUI, StyledHideCheckBox, StyledLabel } from "./styled";

export const CheckBoxUI = forwardRef<HTMLInputElement, ICheckBoxUIProps>(
  ({ checked, onHandleChange, label, ...props }, ref) => {
    const handleCheckedChange = () => {
      onHandleChange(!checked);
    };

    return (
      <StyledCheckBoxContainer onClick={handleCheckedChange}>
        <StyledHideCheckBox
          checked={checked}
          readOnly
          type="checkbox"
          ref={ref}
          {...props}
          onChange={(e) => onHandleChange(e.target.checked)}
        />
        <StyledCheckBoxUI $checked={checked}>
          <SvgIcon icon={icons.check} />
        </StyledCheckBoxUI>
        <StyledLabel>{label}</StyledLabel>
      </StyledCheckBoxContainer>
    );
  },
);
