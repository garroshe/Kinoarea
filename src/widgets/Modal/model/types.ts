import { type FC } from "react";

export interface IModalComponentProps {
  title?: string;
  message?: string;
}

export type ModalName = "login" | "register" | "message" | "resetPassword";

export type ModalMap = Record<ModalName, FC<IModalComponentProps>>;

export interface IModalProps {
  modalName: ModalName | null;
  open: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
}
