import { StyledErrorMessage } from "./styled";

export type ErrorsMessagePropsType = {
  error: string;
};

export const ErrorsMessageUI = ({ error }: ErrorsMessagePropsType) => {
  return <StyledErrorMessage>{error}</StyledErrorMessage>;
};
