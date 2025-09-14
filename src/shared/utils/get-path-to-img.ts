import notFound from "../assets/image/image-not-found.png";
import { imageUrl } from "../constants";

export const getPathToImg = (path: string | undefined, width?: number) => {
  return path ? `${imageUrl}${width ? `w${width}` : "original"}${path}` : notFound;
};
