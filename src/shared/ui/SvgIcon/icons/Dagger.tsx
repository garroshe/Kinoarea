import type { IIconsProps } from "../types";

export const Dagger = ({ onClick, className }: IIconsProps) => {
  return (
    <svg
      className={className}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L22 21.9067M22 2.09332L2 22"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
