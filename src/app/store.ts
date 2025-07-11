import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/entities/auth/slice";
import moviesReducer from "@/entities/movie/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
