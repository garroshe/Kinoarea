import { database, get, ref } from "@/shared/config/firebase";

import type { IUserPayload, IUserResponse } from "../model/types";

export const userService = Object.freeze({
  userFetch: async (payload: IUserPayload): Promise<IUserResponse> => {
    try {
      const { uid } = payload;

      const res = await get(ref(database, `users/${uid}`));

      return { error: null, data: res.val() };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
});
