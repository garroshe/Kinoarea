import { API_KEY } from "@/bus/movie/model/constants";
import { axiosInstance } from "@/shared/api/axiosInstance";

import type { IPayload, MovieResponse, MoviesResponse, VideoResponse } from "../model/types";

export const movieService = Object.freeze({
  moviesNowPlayingFetch: async (payload: IPayload): Promise<MoviesResponse> => {
    try {
      const { page } = payload;

      const res = await axiosInstance.get("/movie/now_playing", {
        params: { page, language: "uk-UA", api_key: API_KEY },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  moviesUpComingFetch: async (payload: IPayload): Promise<MoviesResponse> => {
    try {
      const { page } = payload;

      const res = await axiosInstance.get("/discover/movie", {
        params: {
          api_key: API_KEY,
          page,
          region: "UA",
          language: "uk-UA",
          "primary_release_date.lte": "2025-07-01",
          "primary_release_date.gte": "2025-05-01",
        },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  trailerByIdFetch: async (payload: IPayload): Promise<VideoResponse> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/movie/${id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieByIdFetch: async (payload: IPayload): Promise<MovieResponse> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/movie/${id}`, {
        params: { api_key: API_KEY, language: "uk-UA" },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieByDataReleaseFetch: async (payload: IPayload): Promise<MoviesResponse> => {
    try {
      const { date } = payload;

      const res = await axiosInstance.get(`/discover/movie`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
          sort_by: "popularity.desc",
          primary_release_year: date,
        },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
});
