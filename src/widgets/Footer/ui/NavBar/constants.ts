import { routesBook } from "@/shared/routing/routesBook";

export const NAV_BAR_LINK = [
  { title: "Афіша", to: routesBook.premiereMovies() },
  { title: "Персони", to: routesBook.actors() },
  { title: "Рейтинги", to: routesBook.ratings() },
  { title: "Рецензії", to: routesBook.reviews() },
  { title: "Каталог фільмів", to: routesBook.films() },
];
