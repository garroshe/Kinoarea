import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Обов'язкове поле").min(5, "Мін. 5 символи"),
  reviewType: yup.string().required(),
  content: yup.string().required("Обов'язкове поле").min(10, "Мін. 10 символів"),
});
