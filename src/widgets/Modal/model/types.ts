import React from "react";

export interface IModalProps {
  modalName: string;
  open: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
}

export interface IModalComponentProps {
  title?: string;
  message?: string;
}

export type ModalMap = {
  login: React.FC;
  register: React.FC;
  message: React.FC<{ title: string; message: string }>;
  resetPassword: React.FC;
};
