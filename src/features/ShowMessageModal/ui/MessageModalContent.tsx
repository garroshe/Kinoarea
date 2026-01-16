import { useModal } from "@/app/providers/modal";
import { colors } from "@/shared/constants/style";
import { TitleUI } from "@/shared/ui/TitleUI";

import { ERROR_MESSAGE } from "../const";
import { StyledButton, StyledMessage, StyledMessageModal } from "./styled";

export type MessageModalPropsType = {
  message?: string;
  title?: string;
};

export const MessageModalContent = ({ message, title }: MessageModalPropsType) => {
  const { closeModal } = useModal();

  return (
    <StyledMessageModal>
      <TitleUI title={title} fontSize={40} fontWeight={800} color={colors.white50} />

      <StyledMessage>{message ? message : ERROR_MESSAGE}</StyledMessage>

      <StyledButton onClick={closeModal}>Ok</StyledButton>
    </StyledMessageModal>
  );
};
