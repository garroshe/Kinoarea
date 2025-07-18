import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/api/axiosInstance";

import { API_KEY } from "./constants";
import type { IMovie } from "./types";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (page: number): Promise<IMovie[]> => {
  const res = await axiosInstance.get("/movie/now_playing", {
    params: { page, language: "uk-UA", api_key: API_KEY },
  });
  return res.data.results;
});

export const fetchMoviesByGenre = createAsyncThunk(
  "movies/fetchMoviesByGenre",
  async (genreId: number): Promise<IMovie[]> => {
    const res = await axiosInstance.get(`/discover/movie?with_genres=${genreId}`, {
      params: {
        api_key: API_KEY,
        language: "uk-UA",
        "primary_release_date.lte": "2025-07-01",
        "primary_release_date.gte": "2025-05-01",
      },
    });
    return res.data.results;
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] as IMovie[] | [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.movies = [];
        state.loading = false;
      })
      .addCase(fetchMoviesByGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMoviesByGenre.rejected, (state) => {
        state.movies = [];
        state.loading = false;
      });
  },
});
export default moviesSlice.reducer;
