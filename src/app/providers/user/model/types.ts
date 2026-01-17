import type { ReactNode } from "react";

export type UserContextPropsType = {
  children: ReactNode;
};

export type UserType = {
  uid: string;
  email: string;
  loginName?: string;
  lastName?: string;
  userName?: string;
  avatar?: string;
};

export type UserContextType = {
  logout: () => void;
  user: UserType | null;
  isUserLoading: boolean;
};
