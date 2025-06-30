import type { FC } from "react";

import { ModalUI } from "../../../shared/ui/ModalUI/ModalUI";
import { modalMap } from "../model/modal-map";
import type { IModalComponentProps, IModalProps } from "../model/types";

export const Modal = ({ modalName, open, onClose, title, message }: IModalProps) => {
  const ModalComponent: FC<IModalComponentProps> = modalMap[modalName];

  if (!open) {
    return null;
  }

  return <ModalUI onClose={onClose}>{ModalComponent && <ModalComponent title={title} message={message} />}</ModalUI>;
};
