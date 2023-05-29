import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .matches(/^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$/, "Enter a valid full name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{9}$/, "Enter 9 digit number")
    .required("Phone number is required"),
});
