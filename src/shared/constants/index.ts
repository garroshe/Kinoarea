export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const imageUrl = "https://image.tmdb.org/t/p/";

export const SELECTOR_OPTIONS = [
  { label: "Популярні", value: "popularity.desc" },
  { label: "За рейтингом", value: "vote_average.desc" },
  { label: "Нові релізи", value: "release_date.desc" },
  { label: "A → Z", value: "original_title.asc" },
];

export const DEFAULT_SELECT_VALUE = "popularity.desc";
