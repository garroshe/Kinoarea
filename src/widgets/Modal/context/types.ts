import type { ReactNode } from "react";

export interface IModalContextProps {
  children: ReactNode;
}

export interface IModalContext {
  openModal: (modalName: string, message?: string, title?: string) => void;
  closeModal: () => void;
}
