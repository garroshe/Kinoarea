import { createContext, useContext } from "react";

import { useUserFetchQuery } from "@/shared/hooks/use-user-fetch-query";

import type { UserContextPropsType, UserContextType } from "../model/types";

const UserProvider = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextPropsType) => {
  const { userFetch, isUserLoading, logout } = useUserFetchQuery();

  return <UserProvider.Provider value={{ user: userFetch, logout, isUserLoading }}>{children}</UserProvider.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserProvider);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
