export interface IUser {
  userName?: string;
  avatar?: string;
  lastName?: string;
  loginName?: string;
}

export interface HeaderDesktopProps {
  user: IUser | null;
  isUserLoading: boolean;
  openModal: () => void;
}
