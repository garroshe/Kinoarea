import { mapGenreCodeToGenre } from "../map-genre-code-to-genre";

describe("mapGenreCodeToGenre", () => {
  it("повертає 'Бойовик' для id 28", () => {
    expect(mapGenreCodeToGenre(28)).toBe("Бойовик");
  });

  it("повертає 'Комедія' для id 35", () => {
    expect(mapGenreCodeToGenre(35)).toBe("Комедія");
  });

  it("повертає 'Містика' для id 9648", () => {
    expect(mapGenreCodeToGenre(9648)).toBe("Містика");
  });

  it("повертає 'Наукова фантастика' для id 878", () => {
    expect(mapGenreCodeToGenre(878)).toBe("Наукова фантастика");
  });

  it("повертає 'Невідомий жанр' для невідомого id", () => {
    expect(mapGenreCodeToGenre(9999)).toBe("Невідомий жанр");
  });
});
