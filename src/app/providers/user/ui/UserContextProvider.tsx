import { createContext, useContext } from "react";

import { useUserFetchQuery } from "@/shared/hooks/use-user-fetch-query";

import type { IUserContext, IUserContextProps } from "../model/types";

const UserProvider = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: IUserContextProps) => {
  const { userFetch, isUserLoading, logout } = useUserFetchQuery();

  return <UserProvider.Provider value={{ user: userFetch, logout, isUserLoading }}>{children}</UserProvider.Provider>;
};

export const useUser = (): IUserContext => {
  const context = useContext(UserProvider);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
