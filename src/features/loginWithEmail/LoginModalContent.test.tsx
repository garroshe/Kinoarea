import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import * as useModalModule from "@/app/providers/modal/ModalProvider";
import * as useAuthModule from "@/shared/hooks/use-auth";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { LoginModalContent } from "./LoginModalContent";
import { INPUTS_PLACEHOLDER } from "./model/constants";

const mockUseAuth = useAuthModule.useAuth as unknown as jest.Mock;
const mockUseModal = useModalModule.useModal as unknown as jest.Mock;

vi.mock("@/shared/hooks/use-auth");
vi.mock("@/app/providers/modal/ui/ModalProvider");

const mockOpenModal = vi.fn();
const mockSignInWithEmail = vi.fn();

describe("LoginModalContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockUseAuth.mockReturnValue({
      signInWithEmail: mockSignInWithEmail,
      loading: false,
      error: "",
    });

    mockUseModal.mockReturnValue({
      openModal: mockOpenModal,
    });
  });

  it("render fields and buttons", () => {
    render(<LoginModalContent />);
    expect(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.email)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.password)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Увійти/i })).toBeInTheDocument();
  });

  it("render error validation when field empty", async () => {
    render(<LoginModalContent />);
    fireEvent.click(screen.getByRole("button", { name: /Увійти/i }));
    await waitFor(() => {
      expect(screen.getAllByText(/обов’язкове поле/i).length).toBeGreaterThan(0);
    });
  });

  it("open modal when click to register button", () => {
    render(<LoginModalContent />);
    fireEvent.click(screen.getByRole("button", { name: /Зареєструватись/i }));
    expect(mockOpenModal).toHaveBeenCalledWith(mapModalName.register);
  });

  it("open modal when click to reset password", () => {
    render(<LoginModalContent />);
    fireEvent.click(screen.getByText("Відновити пароль"));
    expect(mockOpenModal).toHaveBeenCalledWith(mapModalName.resetPassword);
  });

  it("login with correct data", async () => {
    render(<LoginModalContent />);
    await userEvent.type(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.email), "t@g.c");
    await userEvent.type(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.password), "123456");
    await userEvent.click(screen.getByRole("button", { name: /Увійти/i }));
    expect(mockSignInWithEmail).toHaveBeenCalledWith("t@g.c", "123456");
  });
});
