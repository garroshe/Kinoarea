export interface IUser {
  userName?: string;
  avatar?: string;
}

export interface HeaderDesktopProps {
  user: IUser | null;
  isUserLoading: boolean;
  openModal: () => void;
}
