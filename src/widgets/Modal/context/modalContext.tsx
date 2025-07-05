import { createContext, useContext, useState } from "react";

import { Modal } from "../ui/Modal";
import type { IModalContext, IModalContextProps, ModalName } from "./types";

export const ModalContext = createContext<IModalContext | null>(null);

export const ModalContextProvider = ({ children }: IModalContextProps) => {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName | null>(null);
  const [title, setTitle] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");

  const closeModal = () => {
    setOpen(false);
    setModalName(null);
  };

  const openModal = (modalName: ModalName, message?: string, title?: string) => {
    setModalName(modalName);
    setOpen(true);
    setTitle(title);
    setMessage(message);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal onClose={closeModal} open={open} modalName={modalName} message={message} title={title} />
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }

  return context;
};
