import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import type { IUser } from "@/app/providers/user/model/types";
import { userService } from "@/bus/user/api/userService";
import { usersQueryKeys } from "@/bus/user/store/queryKeys";

export const useUserFetchQuery = () => {
  const [user, setUser] = useState<IUser | null | undefined>(null);

  const uid = localStorage.getItem("userId");

  const {
    data: response,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => {
      return await userService.userFetch({ uid });
    },
    queryKey: [usersQueryKeys.userFetch, uid],
    enabled: !!uid,
  });

  const { data, error } = response || {};

  useEffect(() => {
    setUser(data);
  }, [data]);

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }

  const logout = () => {
    localStorage.removeItem("userId");
    setUser(null);
  };

  return {
    isUserLoading: isFetching || isLoading,
    userFetch: user || null,
    logout,
    onFetch: refetch,
  };
};
