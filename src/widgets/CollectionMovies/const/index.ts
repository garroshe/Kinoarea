export const COLLECTION_LIST_CONFIG_MAP = {
  top250: {
    endpoint: "movie/top_rated",
    title: "Найкращі фільми за рейтингом",
    limit: 250,
    params: {},
  },
  popular: {
    endpoint: "movie/popular",
    title: "Популярні фільми та серіали",
    limit: 500,
    params: {},
  },
  upcoming: {
    endpoint: "movie/upcoming",
    title: "Очікувані фільми",
    limit: 500,
    params: {},
  },
  romance: {
    endpoint: "discover/movie",
    title: "Фільми про любов",
    limit: 100,
    params: { with_genres: "10749" },
  },
} as const;
