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
    case "auth/account-exists-with-different-credential":
      return "Обліковий запис з таким email уже існує. Увійдіть через інший спосіб.";
    case "auth/email-already-in-use":
      return "Користувач з таким email вже існує";
    case "auth/wrong-password":
      return "Невірний пароль";

    case "auth/user-disabled":
      return "Цей акаунт вимкнено. Зверніться до адміністратора";

    case "auth/popup-closed-by-user":
      return "Ви закрили вікно авторизації";

    case "auth/cancelled-popup-request":
      return "Попередній попап авторизації ще відкритий";

    case "auth/popup-blocked":
      return "Вікно авторизації заблоковано браузером";

    case "auth/operation-not-allowed":
      return "Цей тип авторизації вимкнено";

    case "auth/weak-password":
      return "Пароль має містити щонайменше 6 символів";

    case "auth/invalid-verification-code":
      return "Невірний код підтвердження";

    case "auth/missing-verification-code":
      return "Код підтвердження не знайдено";

    case "auth/invalid-action-code":
      return "Недійсний або прострочений код дії";

    case "auth/expired-action-code":
      return "Код дії вже не дійсний";
    default:
      return "Щось пішло не так. Спробуйте ще раз";
  }
};
