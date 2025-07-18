import type { IIconsProps } from "../types";

export const SearchIcon = ({ className }: IIconsProps) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1087 11.1087L16 16M12.7391 6.86957C12.7391 10.1112 10.1112 12.7391 6.86957 12.7391C3.62789 12.7391 1 10.1112 1 6.86957C1 3.62789 3.62789 1 6.86957 1C10.1112 1 12.7391 3.62789 12.7391 6.86957Z"
        stroke="#3657CB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
