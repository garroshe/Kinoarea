import notFound from "../assets/image-not-found.png";
import { imageUrl } from "../constants";

export const getPathToImg = (path: string | undefined, width: number) => {
  return path ? `${imageUrl}w${width}${path}` : notFound;
};
