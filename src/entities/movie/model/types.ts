type ProductionCountriesType = {
  iso_3166_1: string;
  name: string;
};

export type BelongsToCollectionType = {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
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
  belongs_to_collection?: BelongsToCollectionType | null;
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
  sortBy?: string;
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

export type CollectionPartType = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string | null;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[];
  original_language: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type CollectionsType = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  parts: CollectionPartType[];
};

export type MovieCollectionsResponseType = {
  data: CollectionsType | null;
  error: unknown | null;
};

export type ReviewType = {
  id: number;
  title: string;
  content: string;
  reviewType: "negative" | "positive" | "neutral";
  movieId: number;
  name?: string;
  avatar?: string;
  date: string;
};

export type MovieReviewsResponseType = {
  data: ReviewType[] | null;
  error: unknown | null;
};
