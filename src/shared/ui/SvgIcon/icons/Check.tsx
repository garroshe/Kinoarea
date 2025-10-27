import type { IconsPropsType } from "../types";

export const Check = ({ className, color = "#151A26" }: IconsPropsType) => {
  return (
    <svg className={className} width="8" height="6" viewBox="0 0 8 6" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3.07407L2.95 5L7 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
