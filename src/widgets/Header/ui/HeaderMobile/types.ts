import type { IUser } from "@/app/providers/user/model/types";

export interface HeaderMobileProps {
  user: IUser | null;
  isMobile: boolean;
  openModal: () => void;
  handleBurgerActive: () => void;
  burgerActive: boolean;
}
