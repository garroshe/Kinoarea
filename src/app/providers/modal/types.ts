import type { ReactNode } from "react";

export interface IModalContextProps {
  children: ReactNode;
}

export interface IModalContext {
  openModal: (modalName: ModalName, message?: string, title?: string) => void;
  closeModal: () => void;
}

export type ModalName = "message" | "login" | "register" | "resetPassword";
