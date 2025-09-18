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
