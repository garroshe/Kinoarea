import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import { useAuth } from "@/shared/hooks/use-auth";

import { LoginModalContent } from "./LoginModalContent";

vi.mock("@/app/providers/modal/ui/ModalProvider", async () => ({
  useModal: () => ({
    openModal: vi.fn(),
  }),
}));

vi.mock("@/shared/hooks/use-auth", () => ({
  useAuth: vi.fn(),
}));

const mockSignIn = vi.fn().mockResolvedValue(undefined);

(useAuth as jest.Mock).mockReturnValue({
  signInWithEmail: mockSignIn,
});

describe("LoginModalContent", () => {
  it("render fields and buttons", () => {
    render(<LoginModalContent />);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Увійти/i })).toBeInTheDocument();
  });

  it("render error validation when field empty", async () => {
    render(<LoginModalContent />);
    fireEvent.click(screen.getByRole("button", { name: /Увійти/i }));
    await waitFor(() => {
      expect(screen.getAllByText(/обов’язкове поле/i).length).toBeGreaterThan(0);
    });
  });
});
