import { getFirebaseErrorMessage } from "../map-error-code-to-error-message";

describe("getFirebaseErrorMessage", () => {
  it("Return 'Користувача з таким email не знайдено' for auth/user-not-found", () => {
    expect(getFirebaseErrorMessage("auth/user-not-found")).toBe("Користувача з таким email не знайдено");
  });

  it("Return 'Невірна електронна адреса або пароль' for auth/invalid-credential", () => {
    expect(getFirebaseErrorMessage("auth/invalid-credential")).toBe("Невірна електронна адреса або пароль");
  });

  it("Return 'Некоректний email' for auth/invalid-email", () => {
    expect(getFirebaseErrorMessage("auth/invalid-email")).toBe("Некоректний email");
  });

  it("Return 'Забагато спроб. Спробуйте пізніше' for auth/too-many-requests", () => {
    expect(getFirebaseErrorMessage("auth/too-many-requests")).toBe("Забагато спроб. Спробуйте пізніше");
  });

  it("Return 'Проблеми з інтернетом. Перевірте з'єднання' for auth/network-request-failed", () => {
    expect(getFirebaseErrorMessage("auth/network-request-failed")).toBe("Проблеми з інтернетом. Перевірте з'єднання");
  });

  it("Return 'Щось пішло не так. Спробуйте ще раз' for unknown", () => {
    expect(getFirebaseErrorMessage("unknown")).toBe("Щось пішло не так. Спробуйте ще раз");
  });
});
