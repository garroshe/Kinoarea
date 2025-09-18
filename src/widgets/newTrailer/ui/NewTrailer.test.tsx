import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import * as reactRouterDom from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { queryClient } from "@/shared/config/queryConfig";

import { DEFAULT_TRAILER_ID } from "../model/constants";
import * as movieQuery from "../model/hooks/use-movie-fetch-query";
import * as trailerQuery from "../model/hooks/use-trailer-fetch-query";
import { NewTrailer } from "./NewTrailer";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useSearchParams: () => [{ get: () => "test-id" }],
    useNavigate: () => vi.fn(),
  };
});

describe("newTrailer", () => {
  it("New Trailer render", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <NewTrailer title="test" />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it("render loader", () => {
    vi.spyOn(movieQuery, "useMovieFetchQuery").mockReturnValue({ dataMovieFetch: null, loadingMovieFetch: true });
    vi.spyOn(trailerQuery, "useTrailerFetchQuery").mockReturnValue({ dataTrailer: [], loadingTrailerFetch: true });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <NewTrailer title="test" />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("new-trailer-loader")).toBeInTheDocument();
  });

  it("render iframe with trailer", async () => {
    vi.spyOn(trailerQuery, "useTrailerFetchQuery").mockReturnValue({
      dataTrailer: [{ key: "656363", name: "Some Trailer", type: "Trailer", site: "YouTube" }],
      loadingTrailerFetch: false,
    });

    vi.spyOn(movieQuery, "useMovieFetchQuery").mockReturnValue({
      dataMovieFetch: { title: "Fight Club", vote_count: 100 },
      loadingMovieFetch: false,
    });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <NewTrailer title="test" />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTitle("Some Trailer")).toBeInTheDocument();
      expect(screen.getByTitle("Some Trailer")).toHaveAttribute("src", "https://www.youtube.com/embed/656363");
    });
  });

  it("in rating correct value", async () => {
    vi.spyOn(movieQuery, "useMovieFetchQuery").mockReturnValue({
      dataMovieFetch: { vote_count: 90 },
      loadingMovieFetch: false,
    });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <NewTrailer title="test" />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText("90")).toBeInTheDocument();
    expect(await screen.findByText("30")).toBeInTheDocument();
  });

  it("all correct work also when no trailerId", () => {
    vi.spyOn(reactRouterDom, "useSearchParams").mockReturnValue([new URLSearchParams(), vi.fn()]);
    const spy = vi.spyOn(trailerQuery, "useTrailerFetchQuery");

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <NewTrailer title="test" />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(spy).toHaveBeenCalledWith({ trailerId: DEFAULT_TRAILER_ID });
  });
});
