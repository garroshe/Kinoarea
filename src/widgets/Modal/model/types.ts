import { type FC } from "react";

export type ModalComponentPropsType = {
  title?: string;
  message?: string;
};

export type ModalNameType = "login" | "register" | "message" | "resetPassword";

export type ModalMapType = Record<ModalNameType, FC<ModalComponentPropsType>>;
