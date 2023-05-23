import * as Yup from "yup";

export const fullNameValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required()
    .matches(/^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$/),
});

export const emailValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const phoneValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{9}$/)
    .required(),
});
