import { SvgIcon } from "@/shared/ui/SvgIcon";

import { SOCIAL_ICONS } from "./constants";
import { StyledSocial } from "./styled";

export const SocialUI = () => {
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
