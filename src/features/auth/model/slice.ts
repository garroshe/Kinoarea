import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { database, get, ref } from "../../../shared/config/firebase";
import type { IUser } from "./types";

export const fetchUser = createAsyncThunk("auth/fetchUser", async (uid: string): Promise<IUser> => {
  const snapshot = await get(ref(database, `users/${uid}`));
  return snapshot.val();
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null as IUser | null, loading: false },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userId");
      state.user = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
