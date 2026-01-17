import type { ReactNode } from "react";

export type ModalContextPropsType = {
  children: ReactNode;
};

export type ModalContextType = {
  openModal: (modalName: ModalNameType, message?: string, title?: string) => void;
  closeModal: () => void;
};

export type ModalNameType = "message" | "login" | "register" | "resetPassword";
