export interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  total_pages?: number;
  total_results?: number;
}

export interface IVideo {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  site?: "YouTube" | "Vimeo";
  size?: 360 | 480 | 720 | 1080;
  type?: "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes" | "Bloopers";
  official?: boolean;
  published_at?: string;
}

export type MoviesResponse = {
  data: IMovie[] | null;
  error: unknown | null;
};

export type VideoResponse = {
  data: IVideo[] | null;
  error: unknown | null;
};

export interface IPayload {
  page?: number;
  id?: number | string | null;
  date?: string;
  genre?: string;
}

export type MovieResponse = {
  data: IMovie | null;
  error: unknown | null;
};
