// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";

// import { HeaderUser } from "./HeaderUser";

const mockDispatch = vi.fn();

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

vi.mock("@/entities/auth/slice", () => ({
  logout: vi.fn(() => ({ type: "auth/logout" })),
}));

describe("HeaderUser", () => {
  // it("show component when user auth", async () => {
  //   render(<HeaderUser userName="test" avatar="test" />);
  //
  //   expect(screen.queryByTestId("dropdown-test-id")).not.toBeInTheDocument();
  //
  //   await userEvent.click(screen.getByTestId("headerUser"));
  //
  //   expect(screen.queryByTestId("dropdown-test-id")).toBeInTheDocument();
  //
  //   await userEvent.click(screen.getByTestId("exit-test-id"));
  //   expect(mockDispatch).toHaveBeenCalledWith({ type: "auth/logout" });
  // });
});
