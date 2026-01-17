import { useModal } from "@/app/providers/modal";

import { ERROR_MESSAGE } from "../const";
import { StyledButton, StyledMessage, StyledMessageModal, StyledTitle } from "./styled";

export type MessageModalPropsType = {
  message?: string;
  title?: string;
};

export const MessageModalContent = ({ message, title }: MessageModalPropsType) => {
  const { closeModal } = useModal();

  return (
    <StyledMessageModal>
      <StyledTitle>{title}</StyledTitle>

      <StyledMessage>{message ? message : ERROR_MESSAGE}</StyledMessage>

      <StyledButton onClick={closeModal}>Ok</StyledButton>
    </StyledMessageModal>
  );
};
