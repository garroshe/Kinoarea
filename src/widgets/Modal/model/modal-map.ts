import { LoginModalContent } from "@/features/LoginWithEmail";
import { RegistrationModalContent } from "@/features/RegisterUser";
import { ResetPassword } from "@/features/ResetPassword";
import { MessageModalContent } from "@/features/ShowMessageModal";

import type { ModalMapType } from "./types";

export const modalMap: ModalMapType = {
  login: LoginModalContent,
  register: RegistrationModalContent,
  message: MessageModalContent,
  resetPassword: ResetPassword,
};
