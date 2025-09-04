import { useNavigate } from "react-router-dom";

import type { NavigateButtonUIPropsType } from "./types";
import { StyledNavigateButtonUI } from "./styled";

export const NavigateButtonUI = ({ title, to, width, height }: NavigateButtonUIPropsType) => {
  const navigate = useNavigate();

  const handleNavigateToPoster = () => {
    navigate(to);
  };

  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <StyledNavigateButtonUI style={style} type="button" onClick={handleNavigateToPoster}>
      {title}
    </StyledNavigateButtonUI>
  );
};
