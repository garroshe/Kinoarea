import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import { SOCIAL_ICONS } from "../model/constatns";
import { StyledSocial } from "./styled";

export const Social = () => {
  return (
    <StyledSocial>
      {SOCIAL_ICONS.map((social) => (
        <a key={social.icon} href={social.to}>
          <SvgIcon icon={social.icon} />
        </a>
      ))}
    </StyledSocial>
  );
};
