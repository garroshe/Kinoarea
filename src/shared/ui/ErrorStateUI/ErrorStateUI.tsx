import { ERROR_DEFAULT_TEXT } from "./constatns";
import { StyledErrorBlock, StyledErrorText, StyledErrorTitle } from "./styled";

type ErrorStateUIType = {
  content?: string;
};

export const ErrorStateUI = ({ content }: ErrorStateUIType) => {
  return (
    <StyledErrorBlock>
      <StyledErrorTitle>Помилка :(</StyledErrorTitle>
      <StyledErrorText>{content ? content : ERROR_DEFAULT_TEXT}</StyledErrorText>
    </StyledErrorBlock>
  );
};
