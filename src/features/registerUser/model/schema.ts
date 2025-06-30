import * as yup from "yup";

import { emailRegex } from "../../../shared/constants";

export const schema = yup.object({
  name: yup.string().required("Обов'язково поле").min(2, "Мін. 2 символи"),
  lastName: yup.string().required("Обов'язково поле").min(3, "Мін. 3 символи"),
  loginName: yup.string().required("Обов'язково поле").min(3, "Мін. 3 символи"),
  password: yup.string().required("Обов'язково поле").min(6, "Мін. 6 символів").max(20, "макс. 20 символів"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Паролі не збігаються")
    .required("Обов'язково поле"),
  email: yup.string().required("Обов'язково поле").matches(emailRegex, "Некоректний email"),
  privacy: yup.boolean().required("Обов'язково поле"),
  processing: yup.boolean().required("Обов'язково поле"),
});
