import { routesBook } from "@/shared/routing/routesBook";

export const BURGER_MENU_PATH = [
  { to: routesBook.premiereMovies(), label: "Афіша" },
  { to: routesBook.films(), label: "Фільми" },
  { to: routesBook.actors(), label: "Актори" },
  { to: routesBook.news(), label: "Новини" },
  { to: routesBook.collections(), label: "Добірки" },
  { to: routesBook.categories(), label: "Категорії" },
];
