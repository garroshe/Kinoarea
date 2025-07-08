import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../entities/movie/model/slice";
import authReducer from "../features/auth/model/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
