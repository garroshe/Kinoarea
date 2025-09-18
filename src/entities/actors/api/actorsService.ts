import { axiosInstance } from "@/shared/api/axiosInstance";

import { API_KEY } from "../model/constants";
import type { ActorsMovieResponseType, PayloadType } from "../model/types";

export const ActorsService = Object.freeze({
  movieActorsFetch: async (payload: PayloadType): Promise<ActorsMovieResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
});
