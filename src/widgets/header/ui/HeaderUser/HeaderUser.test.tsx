import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { logout } from "@/entities/auth/slice";

import { HeaderUser } from "./HeaderUser";

const mockDispatch = vi.fn();

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

beforeEach(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

vi.mock("@/entities/auth/slice", () => ({
  logout: vi.fn(() => ({ type: "auth/logout" })),
}));

describe("HeaderUser", () => {
  it("show component when user auth", async () => {
    render(<HeaderUser userName="test" avatar="test" />);

    expect(screen.queryByTestId("dropdown-test-id")).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId("headerUser"));

    expect(screen.queryByTestId("dropdown-test-id")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("exit-test-id"));
    expect(logout).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "auth/logout" });
  });
});
