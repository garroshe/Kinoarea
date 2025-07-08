import { searchParams } from "../search-params";

describe("searchParams", () => {
  it("returns language values", () => {
    expect(searchParams.language).toBe("language=uk-UA");
  });

  it("returns releaseGTE values", () => {
    expect(searchParams.releaseGTE).toBe("primary_release_date.gte=2025-04-08");
  });

  it("returns releaseLTE values", () => {
    expect(searchParams.releaseLTE).toBe("primary_release_date.lte=2025-07-08");
  });
});
