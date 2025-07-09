import { LoginModalContent } from "@/features/loginWithEmail/ui/LoginModalContent";
import { RegistrationModalContent } from "@/features/registerUser/ui/RegistrationModalContent";
import { ResetPassword } from "@/features/resetPassword/ui/ResetPassword";
import { MessageModalContent } from "@/features/showMessageModal/ui/MessageModalContent";

import type { ModalMap } from "./types";

export const modalMap: ModalMap = {
  login: LoginModalContent,
  register: RegistrationModalContent,
  message: MessageModalContent,
  resetPassword: ResetPassword,
};
