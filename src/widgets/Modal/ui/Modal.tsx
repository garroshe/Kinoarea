import { ModalUI } from "@/shared/ui/ModalUI";
import { modalMap } from "@/widgets/Modal/model/modal-map";
import type { ModalNameType } from "@/widgets/Modal/model/types";

export type ModalPropsType = {
  modalName: ModalNameType | null;
  open: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
};

export const Modal = ({ modalName, open, onClose, title, message }: ModalPropsType) => {
  const ModalComponent = modalName ? modalMap[modalName] : null;

  if (!open) {
    return null;
  }

  return <ModalUI onClose={onClose}>{ModalComponent && <ModalComponent title={title} message={message} />}</ModalUI>;
};
