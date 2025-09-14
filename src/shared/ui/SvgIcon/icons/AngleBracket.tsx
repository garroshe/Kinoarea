import { colors } from "@/shared/constants/style";

import type { IconsPropsType } from "../types";

export const AngleBracket = ({ className }: IconsPropsType) => {
  return (
    <svg className={className} width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 4.38304L1.05501 8" stroke={colors.white400} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
