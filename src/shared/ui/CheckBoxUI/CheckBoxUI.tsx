import { forwardRef } from "react";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledCheckBoxContainer, StyledCheckBoxUI, StyledHideCheckBox, StyledLabel } from "./styled";

export type CheckBoxUIPropsType = {
  checked: boolean;
  onHandleChange: (value: boolean) => void;
  label: string;
};

export const CheckBoxUI = forwardRef<HTMLInputElement, CheckBoxUIPropsType>(
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
