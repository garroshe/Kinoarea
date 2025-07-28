import * as yup from "yup";

import { emailRegex } from "@/shared/constants";

export const schema = yup.object({
  email: yup.string().required("Обов’язкове поле").min(3, "Мін. 3 символи").matches(emailRegex, "Некоректний email"),
  password: yup.string().required("Обов’язкове поле").min(6, "Мін. 6 символів"),
});
