import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(100, "Title is too long!")
    .required("Title is required"),
  img: Yup.string().required("Image is required!"),
});
