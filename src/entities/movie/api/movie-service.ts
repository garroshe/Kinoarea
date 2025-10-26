import { axiosInstance, mockApiAxiosInstance } from "@/shared/api/axiosInstance";

import { API_KEY } from "../model/constants";
import type {
  MovieCollectionsResponseType,
  MovieImagesResponseType,
  MovieResponseType,
  MovieReviewsResponseType,
  MoviesResponseType,
  PayloadType,
  ReviewType,
  VideoResponseType,
} from "../model/types";

export const movieService = Object.freeze({
  moviesNowPlayingFetch: async (payload: PayloadType): Promise<MoviesResponseType> => {
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
  moviesUpComingFetch: async (payload: PayloadType): Promise<MoviesResponseType> => {
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
  trailerByIdFetch: async (payload: PayloadType): Promise<VideoResponseType> => {
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
  movieByIdFetch: async (payload: PayloadType): Promise<MovieResponseType> => {
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
  movieByDataReleaseFetch: async (payload: PayloadType): Promise<MoviesResponseType> => {
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
  movieNowPlayingFetch: async (payload: PayloadType): Promise<MoviesResponseType> => {
    try {
      const { genre } = payload;

      const res = await axiosInstance.get("/discover/movie", {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
          "primary_release_date.lte": "2025-07-01",
          "primary_release_date.gte": "2025-05-01",
          with_genres: genre,
        },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieFramesFetch: async (payload: PayloadType): Promise<MovieImagesResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/movie/${id}/images`, {
        params: {
          api_key: API_KEY,
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieSequelsAndPrequelsFetch: async (payload: PayloadType): Promise<MovieCollectionsResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/collection/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieReviewsFetch: async (payload: PayloadType): Promise<MovieReviewsResponseType> => {
    try {
      const { id } = payload;

      const res = await mockApiAxiosInstance.get(`rewievs?movieId=${id}`, {});

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  movieReviewsFetchMutation: async (data: Omit<ReviewType, "id">): Promise<MovieReviewsResponseType> => {
    try {
      const res = await mockApiAxiosInstance.post(`rewievs`, data);

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
});
