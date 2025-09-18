type ProductionCountriesType = {
  iso_3166_1: string;
  name: string;
};

export type MovieType = {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
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
  production_countries?: ProductionCountriesType[];
  tagline?: string;
  budget?: string;
  revenue?: number;
  runtime?: number;
};

export type VideoType = {
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
};

export type MoviesResponseType = {
  data: MovieType[] | null;
  error: unknown | null;
};

export type VideoResponseType = {
  data: VideoType[] | null;
  error: unknown | null;
};

export type PayloadType = {
  page?: number;
  id?: number | string | null;
  date?: string;
  genre?: string;
};

export type MovieResponseType = {
  data: MovieType | null;
  error: unknown | null;
};

export type MovieImagesResponseType = {
  data: MovieImagesType | null;
  error: unknown | null;
};

export type MovieImagesType = {
  id: number;
  backdrops: MovieImageType[];
  posters: MovieImageType[];
  logos: MovieImageType[];
};

export type MovieImageType = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
};
