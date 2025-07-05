import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { logout } from "../../../../../../features/auth/model/slice";
import { HeaderUser } from "./HeaderUser";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../../../features/auth/model/slice", () => ({
  logout: jest.fn(() => ({ type: "auth/logout" })),
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
