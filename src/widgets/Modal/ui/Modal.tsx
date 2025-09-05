import { ModalUI } from "@/shared/ui/ModalUI";
import { modalMap } from "@/widgets/Modal/model/modal-map";
import type { IModalProps } from "@/widgets/Modal/model/types";

export const Modal = ({ modalName, open, onClose, title, message }: IModalProps) => {
  const ModalComponent = modalName ? modalMap[modalName] : null;

  if (!open) {
    return null;
  }

  return <ModalUI onClose={onClose}>{ModalComponent && <ModalComponent title={title} message={message} />}</ModalUI>;
};
