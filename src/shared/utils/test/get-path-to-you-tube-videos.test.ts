import { getPathToYouTubeVideo } from "@/shared/utils/get-path-to-you-tube-video";

describe("getPathToYouTubeVideo", () => {
  it("return path when arg type equal string", () => {
    expect(getPathToYouTubeVideo("test")).toBe("https://www.youtube.com/embed/test");
  });

  it("return path when arg type equal number", () => {
    expect(getPathToYouTubeVideo(1234)).toBe("https://www.youtube.com/embed/1234");
  });
});
