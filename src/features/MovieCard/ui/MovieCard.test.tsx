import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { MovieCard } from "./MovieCard";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useSearchParams: () => [{ get: () => "test-id" }],
    useNavigate: () => vi.fn(),
  };
});

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

  it("shows and hides active block on hover", async () => {
    render(
      <MemoryRouter>
        <MovieCard title="test" rating={5} img="http:test.com" genre={[20]} originalTitle="test" id={34} />
      </MemoryRouter>,
    );

    const card = screen.getByTestId("movie-card");
    const activeBlock = screen.getByTestId("active-block");

    expect(activeBlock).not.toBeVisible();

    await userEvent.hover(card);
    expect(activeBlock).toBeVisible();

    await userEvent.unhover(card);
    expect(activeBlock).not.toBeVisible();
  });
});
