import { routesBook } from "@/app/routing/routesBook";

export const NAVBAR_PATH = [
  { to: routesBook.posters(), label: "Афіша" },
  { to: routesBook.media(), label: "Медіа" },
  { to: routesBook.films(), label: "Фільми" },
  { to: routesBook.actors(), label: "Актори" },
  { to: routesBook.news(), label: "Новини" },
  { to: routesBook.collections(), label: "Добірки" },
  { to: routesBook.categories(), label: "Категорії" },
];
