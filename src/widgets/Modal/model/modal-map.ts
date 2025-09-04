import { LoginModalContent } from "@/features/loginWithEmail";
import { RegistrationModalContent } from "@/features/registerUser";
import { ResetPassword } from "@/features/resetPassword";
import { MessageModalContent } from "@/features/showMessageModal";

import type { ModalMap } from "./types";

export const modalMap: ModalMap = {
  login: LoginModalContent,
  register: RegistrationModalContent,
  message: MessageModalContent,
  resetPassword: ResetPassword,
};
