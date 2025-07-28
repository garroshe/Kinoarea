import { createContext, useCallback, useContext, useState } from "react";

import { Modal } from "@/widgets/Modal/Modal";

import type { IModalContext, IModalContextProps, ModalName } from "../model/types";

export const ModalProvider = createContext<IModalContext | null>(null);

export const ModalContextProvider = ({ children }: IModalContextProps) => {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName | null>(null);
  const [title, setTitle] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");

  const closeModal = useCallback(() => {
    setOpen(false);
    setModalName(null);
  }, []);

  const openModal = useCallback((modalName: ModalName, message?: string, title?: string) => {
    setModalName(modalName);
    setOpen(true);
    setTitle(title);
    setMessage(message);
  }, []);

  return (
    <ModalProvider.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal onClose={closeModal} open={open} modalName={modalName} message={message} title={title} />
    </ModalProvider.Provider>
  );
};

export const useModal = (): IModalContext => {
  const context = useContext(ModalProvider);

  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }

  return context;
};
