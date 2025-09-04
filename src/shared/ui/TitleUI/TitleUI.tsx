import type { TitleUIPropsType } from "./types";
import { StyledTittleUI } from "./styled";

export const TitleUI = ({
  title,
  color = "#ffffff",
  fontSize = 18,
  fontWeight = 900,
  marginBottom = 0,
  marginTop = 0,
}: TitleUIPropsType) => {
  return (
    <StyledTittleUI
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $marginBottom={marginBottom}
      $marginTop={marginTop}
    >
      {title}
    </StyledTittleUI>
  );
};
