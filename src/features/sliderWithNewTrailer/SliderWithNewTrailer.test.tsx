import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import { queryClient } from "@/shared/config/queryConfig";

import * as useNewTrailersQuery from "./model/use-new-trailers-fetch-query";
import { SliderWithNewTrailer } from "./SliderWithNewTrailer";

describe("SliderWithNewTrailer", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("render slider", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SliderWithNewTrailer />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("sliderWithNewTrailer")).toBeInTheDocument();
  });

  it("render spinner", () => {
    vi.spyOn(useNewTrailersQuery, "useNewTrailersFetchQuery").mockReturnValue({
      dataFetchTrailers: null,
      loadingFetchTrailers: true,
    });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SliderWithNewTrailer />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("slider-with-new-trailer-spinner")).toBeInTheDocument();
  });

  it("render slides", () => {
    vi.spyOn(useNewTrailersQuery, "useNewTrailersFetchQuery").mockReturnValue({
      dataFetchTrailers: [
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test1" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test2" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test3" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test4" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test5" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test6" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test7" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test8" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test9" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test10" },
      ],
      loadingFetchTrailers: false,
    });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SliderWithNewTrailer />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("active slide", async () => {
    vi.spyOn(useNewTrailersQuery, "useNewTrailersFetchQuery").mockReturnValue({
      dataFetchTrailers: [
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test1" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test2" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test3" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test4" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test5" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test6" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test7" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test8" },
        { id: 1234, backdrop_path: "/test/14234", original_title: "test0", title: "test9" },
        { id: 12345, backdrop_path: "/test/14235", original_title: "test1", title: "test10" },
      ],
      loadingFetchTrailers: false,
    });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SliderWithNewTrailer />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByText("test2"));

    const blocks = screen.getAllByTestId("slider-with-trailer-block");
    const activeBlock = blocks.find((el) => el.classList.contains("active"));

    expect(activeBlock).toBeInTheDocument();
  });
});
