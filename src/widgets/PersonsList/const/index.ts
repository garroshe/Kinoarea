import { routesBook } from "@/shared/routing/routesBook";

export const ITEMS_PER_PAGE = 20;
export const MAX_PAGES = 500;

export const ERROR_MESSAGE = "На даний момент у нас виникли проблеми з цими акторами, спробуйте будь ласка пізніше";

export const BREAD_CRUMBS_PATH = [{ to: routesBook.actors(), label: "Актори", isLast: true }];
