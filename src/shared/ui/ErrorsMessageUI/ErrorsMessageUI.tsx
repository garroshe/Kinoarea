import type { IErrorsMessageProps } from "./types";
import { StyledErrorMessage } from "./styled";

export const ErrorsMessageUI = ({ error }: IErrorsMessageProps) => {
  return <StyledErrorMessage>{error}</StyledErrorMessage>;
};
