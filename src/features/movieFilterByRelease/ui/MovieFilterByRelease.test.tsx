import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";

import { LIST_ITEMS_BY_RELEASE } from "../model/constants";
import { MovieFilterByRelease } from "./MovieFilterByRelease";

describe("MovieFilterByRelease", () => {
  it("render filters", () => {
    render(
      <MemoryRouter>
        <MovieFilterByRelease />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("release-tabs")).toBeInTheDocument();

    LIST_ITEMS_BY_RELEASE.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("set active tab", () => {
    render(
      <MemoryRouter>
        <MovieFilterByRelease />
      </MemoryRouter>,
    );

    const allTabs = screen.getAllByTestId("release-tab");
    fireEvent.click(allTabs[1]);

    expect(allTabs[1].classList.contains("active")).toBe(true);
  });
});
