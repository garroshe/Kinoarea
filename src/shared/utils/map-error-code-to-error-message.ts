export const getFirebaseErrorMessage = (code: string): string => {
  switch (code) {
    case "auth/user-not-found":
      return "Користувача з таким email не знайдено";
    case "auth/invalid-credential":
      return "Невірна електронна адреса або пароль";
    case "auth/invalid-email":
      return "Некоректний email";
    case "auth/too-many-requests":
      return "Забагато спроб. Спробуйте пізніше";
    case "auth/network-request-failed":
      return "Проблеми з інтернетом. Перевірте з'єднання";
    default:
      return "Щось пішло не так. Спробуйте ще раз";
  }
};
