import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import * as useMovieFetchByIdQueryModule from "../api/hooks/use-movie-fetch-by-id-query";
import { MovieDescription } from "./MovieDescription";

vi.mock("../api/hooks/use-movie-fetch-by-id-query");

const mockUseMovieFetchByIdQuery = useMovieFetchByIdQueryModule.useMovieFetchByIdQuery() as unknown as jest.Mock;

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Movie Description", () => {
  it("Render Widgets", () => {
    mockUseMovieFetchByIdQuery.mockReturnValue({
      movieDataFetch: {
        vote_average: 5,
        poster_path: "/poster.jpg",
        original_title: "test_original_title",
        title: "test_title",
        overview: "test_overview",
        vote_count: 35,
        release_date: 35,
        production_countries: "test_production_countries",
        tagline: "test_tagline",
        genre_ids: "test_genre_ids",
        budget: 4434,
        adult: false,
        revenue: "test_revenue",
        runtime: 343,
      },
      movieLoading: false,
    });

    render(
      <MemoryRouter>
        <MovieDescription />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("movie-info")).toBeInTheDocument();
    expect(screen.getByText("test_title")).toBeInTheDocument();
  });
  it("redirect to error page if none data", () => {
    mockUseMovieFetchByIdQuery.mockReturnValue({
      movieDataFetch: undefined,
      movieLoading: false,
    });

    render(
      <MemoryRouter>
        <MovieDescription />
      </MemoryRouter>,
    );

    expect(mockNavigate).toHaveBeenCalledWith("/error_movie_not_found");
  });

  it("progressWidth correct vision", () => {
    mockUseMovieFetchByIdQuery.mockReturnValue({
      movieDataFetch: {
        vote_average: 5,
        poster_path: "/poster.jpg",
        original_title: "test_original_title",
        title: "test_title",
        overview: "test_overview",
        vote_count: 1250,
        release_date: 35,
        production_countries: "test_production_countries",
        tagline: "test_tagline",
        genre_ids: "test_genre_ids",
        budget: 4434,
        adult: false,
        revenue: "test_revenue",
        runtime: 343,
      },
      movieLoading: false,
    });

    render(
      <MemoryRouter>
        <MovieDescription />
      </MemoryRouter>,
    );

    expect(screen.getByText("Рейтинг очікувань 50%")).toBeInTheDocument();
  });
});
