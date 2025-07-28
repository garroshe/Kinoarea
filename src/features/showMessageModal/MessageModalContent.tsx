import { useModal } from "@/app/providers/modal/ui/ModalProvider";
import { colors } from "@/shared/constants/style";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";

import type { IMessageModalProps } from "./model/types";
import { StyledButton, StyledMessage, StyledMessageModal } from "./styled";

export const MessageModalContent = ({ message, title }: IMessageModalProps) => {
  const { closeModal } = useModal();

  return (
    <StyledMessageModal>
      <TitleUI title={title} fontSize={40} fontWeight={800} color={colors.white50} />

      <StyledMessage>{message ? message : "Ой, щось пішло не так. Повтори спробу пізніше"}</StyledMessage>

      <StyledButton onClick={closeModal}>Ok</StyledButton>
    </StyledMessageModal>
  );
};
