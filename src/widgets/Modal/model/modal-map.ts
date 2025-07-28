import { LoginModalContent } from "@/features/loginWithEmail/LoginModalContent";
import { RegistrationModalContent } from "@/features/registerUser/RegistrationModalContent";
import { ResetPassword } from "@/features/resetPassword/ResetPassword";
import { MessageModalContent } from "@/features/showMessageModal/MessageModalContent";

import type { ModalMap } from "./types";

export const modalMap: ModalMap = {
  login: LoginModalContent,
  register: RegistrationModalContent,
  message: MessageModalContent,
  resetPassword: ResetPassword,
};
