import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { MovieCard } from "./MovieCard";

describe("MovieCard", () => {
  it("Movie card render", () => {
    render(<MovieCard title="test" rating={5} img="http:test.com" genre={[18]} originalTitle="test" id={34} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("Драма")).toBeInTheDocument();
    expect(screen.getByText("5")).toHaveStyle({ backgroundColor: "#CB3F36" });
  });

  it("shows active block after click", async () => {
    render(
      <MemoryRouter>
        <MovieCard title="test" rating={5} img="http:test.com" genre={[20]} originalTitle="test" id={34} />
      </MemoryRouter>,
    );
    await userEvent.click(screen.getByTestId("movie-card"));
    expect(screen.getByTestId("active-block")).toBeInTheDocument();
  });

  it("shows active block after click and hide after second click", async () => {
    render(
      <MemoryRouter>
        <MovieCard title="test" rating={5} img="http:test.com" genre={[20]} originalTitle="test" id={34} />
      </MemoryRouter>,
    );
    await userEvent.click(screen.getByTestId("movie-card"));
    expect(screen.getByTestId("active-block")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("movie-card"));
    expect(screen.queryByTestId("active-block")).not.toBeInTheDocument();
  });
});
