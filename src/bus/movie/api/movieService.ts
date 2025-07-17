import { axiosInstance } from "@/shared/api/axiosInstance";
import { searchParams } from "@/shared/utils/search-params";

import { API_KEY } from "../model/constants";
import type { IPayload, MoviesNowPlayingResponse } from "../model/types";

export const movieService = Object.freeze({
  moviesNowPlayingFetch: async (payload: IPayload): Promise<MoviesNowPlayingResponse> => {
    try {
      const { page } = payload;

      const res = await axiosInstance.get(`/movie/now_playing?api_key=${API_KEY}&${searchParams.language}`, {
        params: { page },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  moviesUpComingFetch: async (payload: IPayload): Promise<MoviesNowPlayingResponse> => {
    try {
      const { page } = payload;

      const res = await axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}&${searchParams.language}`, {
        params: { page },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
});
