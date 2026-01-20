type CastType = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
};

type CrewType = {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
};

export type ActorsMovieType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};

export type ActorsMovieResponseType = {
  data: ActorsMovieType | null;
  error: unknown | null;
};

export type PayloadType = {
  page?: number;
  id?: number | string | null;
  date?: string;
  genre?: string;
};

export type ActorType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type ActorResponseType = {
  data: ActorType | null;
  error: unknown | null;
};

export type ActorImageProfile = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
};

export type ActorImagesType = {
  id: number;
  profiles: ActorImageProfile[];
};

export type ActorImagesResponseType = {
  data: ActorImagesType | null;
  error: unknown | null;
};

export type MediaType = "movie" | "tv";

export type KnownForBaseType = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  media_type: MediaType;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
};

export type KnownForMovieType = {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
} & KnownForBaseType;

export type KnownForTVType = {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
} & KnownForBaseType;

export type KnownForType = KnownForMovieType | KnownForTVType;

export type PopularActorType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownForType[];
};

export type PopularActorsResponseType = {
  data: {
    page: number;
    results: PopularActorType[];
    total_pages: number;
    total_results: number;
  } | null;
  error: unknown | null;
};
