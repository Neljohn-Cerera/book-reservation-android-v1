import * as Yup from "yup";

//Login
export const login_validation = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number should only be digits")
    .required("Phone Number is Required")
    .min(11, "Phone Number should be exactly 11 digits")
    .max(11, "Phone Number should be exactly 11 digits"),
  password: Yup.string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

//OTP
export const otp_validation = Yup.object().shape({
  one: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number should only be digits")
    .required("required"),
  two: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number should only be digits")
    .required("required"),
  three: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number should only be digits")
    .required("required"),
  four: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number should only be digits")
    .required("required"),
});
