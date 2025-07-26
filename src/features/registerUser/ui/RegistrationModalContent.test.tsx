import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import * as useModalModule from "@/app/providers/modal/ui/ModalProvider";
import * as useAuthModule from "@/shared/hooks/use-auth";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { MESSAGE_MODAL } from "../../loginWithEmail/model/constants";
import { RegistrationModalContent } from "./RegistrationModalContent";

vi.mock("@/shared/config/firebase", () => ({
  database: {},
  ref: vi.fn(),
  onValue: vi.fn(),
  set: vi.fn(),
  get: vi.fn(),
  push: vi.fn(),
  FirebaseError: vi.fn(),
  auth: {},
}));

const mockUseAuth = useAuthModule.useAuth as unknown as jest.Mock;
const mockUseModal = useModalModule.useModal as unknown as jest.Mock;

vi.mock("@/entities/auth/useAuth");
vi.mock("@/widgets/Modal/context/modalContext");

const mockOpenModal = vi.fn();
const mockSignUpWithEmail = vi.fn();

describe("RegistrationModalContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockUseAuth.mockReturnValue({
      signUp: mockSignUpWithEmail,
      loading: false,
      error: "",
    });

    mockUseModal.mockReturnValue({
      openModal: mockOpenModal,
    });
  });

  it("renders input fields and submit button", () => {
    render(<RegistrationModalContent />);

    expect(screen.getByPlaceholderText("Ім'я")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Прізвище")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Придумайте логін")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Придумайте пароль")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Повторіть пароль")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("Погоджуюся на умови політики конфіденційності")).toBeInTheDocument();
    expect(screen.getByText("Погоджуюсь на обробку персональних даних")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /зареєструватись/i })).toBeInTheDocument();
  });

  it("shows validation errors on submit", async () => {
    render(<RegistrationModalContent />);

    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));

    expect(await screen.findAllByText("Обов'язкове поле")).toHaveLength(6);

    await userEvent.type(screen.getByPlaceholderText("Ім'я"), "t");
    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));

    expect(await screen.findAllByText("Мін. 2 символи")).toHaveLength(1);

    await userEvent.type(screen.getByPlaceholderText("Прізвище"), "te");
    await userEvent.type(screen.getByPlaceholderText("Придумайте логін"), "te");
    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));

    expect(await screen.findAllByText("Мін. 3 символи")).toHaveLength(2);

    await userEvent.type(screen.getByPlaceholderText("Придумайте пароль"), "123456");
    await userEvent.type(screen.getByPlaceholderText("Повторіть пароль"), "1234567");

    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));

    expect(await screen.findAllByText("Паролі не збігаються")).toHaveLength(1);
  });

  it("calls signUpWithEmail with don`t empty fields then click register button", async () => {
    render(<RegistrationModalContent />);

    await userEvent.type(screen.getByPlaceholderText("Ім'я"), "test");
    await userEvent.type(screen.getByPlaceholderText("Прізвище"), "test");
    await userEvent.type(screen.getByPlaceholderText("Придумайте логін"), "test");
    await userEvent.type(screen.getByPlaceholderText("Придумайте пароль"), "123456");
    await userEvent.type(screen.getByPlaceholderText("Повторіть пароль"), "123456");
    await userEvent.type(screen.getByPlaceholderText("E-mail"), "t@g.c");

    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));

    expect(mockSignUpWithEmail).toHaveBeenCalledWith("t@g.c", "123456", "test", "test", "test");
  });

  it("calls openModal when get error", async () => {
    mockUseAuth.mockReturnValueOnce({
      signUp: mockSignUpWithEmail,
      loading: false,
      error: "test",
    });

    render(<RegistrationModalContent />);

    expect(mockOpenModal).toHaveBeenCalledWith(mapModalName.message, "test", MESSAGE_MODAL.title);
  });

  it("render spinner and button set disabled", async () => {
    mockUseAuth.mockReturnValueOnce({
      signUp: mockSignUpWithEmail,
      loading: true,
      error: "",
    });

    render(<RegistrationModalContent />);

    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));
    expect(mockSignUpWithEmail).not.toHaveBeenCalled();
  });
});
