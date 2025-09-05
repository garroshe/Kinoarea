import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledSearch } from "./styled";

//TO-DO
//Add search block with logic

export const Search = () => {
  return (
    <StyledSearch>
      <SvgIcon icon={icons.search} />
    </StyledSearch>
  );
};
