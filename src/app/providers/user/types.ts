import type { ReactNode } from "react";

export interface IUserContextProps {
  children: ReactNode;
}

export interface IUser {
  uid: string;
  email: string;
  loginName?: string;
  lastName?: string;
  userName?: string;
  avatar?: string;
}

export interface IUserContext {
  logout: () => void;
  user: IUser | null;
  isUserLoading: boolean;
}
