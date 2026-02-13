export type QueryParamsType = {
  movie_name?: string | undefined;
  release_date_from?: number | undefined;
  release_date_to?: number | undefined;
  vote_average?: number | undefined;
  vote_count?: number | undefined;
  year?: number | undefined;
  with_genres?: string | undefined;
  with_people?: string | undefined;
  with_cast?: string | undefined;
};

export type PayloadType = {
  query?: string;
  queryParams?: QueryParamsType;
};

export type MultiMovieType = {
  media_type: "movie";
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
};

export type MultiPersonType = {
  media_type: "person";
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  known_for_department: string;
  known_for: Array<KnownForMovieType | KnownForTvType>;
};

export type KnownForMovieType = {
  media_type: "movie";
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
};

export type KnownForTvType = {
  media_type: "tv";
  id: number;
  name: string;
  original_name: string;
  poster_path: string;
  first_air_date: string;
};

export type MultiTvType = {
  media_type: "tv";
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  popularity: number;
};

export type MultiSearchResultType = MultiMovieType | MultiPersonType | MultiTvType;

export type SearchResponseType = {
  data: MultiSearchResultType[] | null;
  error: unknown | null;
};
