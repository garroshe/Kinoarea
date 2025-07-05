import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUser } from "../../../features/auth/model/slice";
import type { AppDispatch } from "../../store";

export const AuthInitializer = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    if (uid) dispatch(fetchUser(uid));
  }, []);

  return null;
};
