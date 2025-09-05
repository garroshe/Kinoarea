export interface IUser {
  userName?: string;
  avatar?: string;
}

export interface HeaderMobileProps {
  user: IUser | null;
  isMobile: boolean;
  openModal: () => void;
  handleBurgerActive: () => void;
  burgerActive: boolean;
}
