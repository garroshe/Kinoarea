import type { ITitleUIProps } from "./types";
import { StyledTittleUI } from "./styled";

export const TitleUI = ({
  title,
  color = "#ffffff",
  fontSize = 18,
  fontWeight = 900,
  marginBottom = 0,
  marginTop = 0,
}: ITitleUIProps) => {
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
