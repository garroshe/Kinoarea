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
