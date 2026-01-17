import { createContext, useCallback, useContext, useState } from "react";

import { Modal } from "@/widgets/Modal";

import type { ModalContextPropsType, ModalContextType, ModalNameType } from "../types";

const ModalProvider = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: ModalContextPropsType) => {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalNameType | null>(null);
  const [title, setTitle] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");

  const closeModal = useCallback(() => {
    setOpen(false);
    setModalName(null);
  }, []);

  const openModal = useCallback((modalName: ModalNameType, message?: string, title?: string) => {
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

export const useModal = (): ModalContextType => {
  const context = useContext(ModalProvider);

  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }

  return context;
};
