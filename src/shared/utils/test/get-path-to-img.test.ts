import notFound from "../../assets/image/image-not-found.png";
import { getPathToImg } from "../get-path-to-img";

describe("getPathToImg", () => {
  it("returns the path to the img", () => {
    expect(getPathToImg("/test.jpg", 400)).toBe("https://image.tmdb.org/t/p/w400/test.jpg");
  });

  it("returns the img if path none", () => {
    expect(getPathToImg("", 400)).toBe(notFound);
  });
});
