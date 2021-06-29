import * as Yup from "yup";

//step one
export const step_one_validation = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number be only digits")
    .required("Phone Number is Required")
    .min(11, "Phone Number should be exactly 11 digits")
    .max(11, "Phone Number should be exactly 11 digits"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
//step two student
export const step_two_student_validation = Yup.object().shape({
  studentid: Yup.string()
    .required("Student ID is required")
    .min(3, "Student id should at least 3 digit characters"),
  course: Yup.string()
    .oneOf(["BSIT", "HRDM", "HRDM", "BSED"], "Invalid Course")
    .required("Course Required"),
  courseyear: Yup.string()
    .oneOf(["1st Year", "2nd Year", "3rd Year", "4th Year"], "Invalid Year")
    .required("Year Required"),
});
//step two teacher
export const step_two_teacher_validation = Yup.object().shape({
  teacherid: Yup.string()
    .required("Teacher ID is required")
    .min(3, "Teacher id should at least 3 digit characters"),
  jobstate: Yup.string()
    .oneOf(["Full Time", "Part Timer"], "Invalid Job State")
    .required("Job State Required"),
  department: Yup.string()
    .oneOf(
      ["High School", "Senior High School", "College"],
      "Invalid Department"
    )
    .required("Department Required"),
});
//step two others
export const step_two_others_validation = Yup.object().shape({
  employeeid: Yup.string()
    .required("Teacher ID is required")
    .min(3, "Teacher id should at least 3 digit characters"),
  description: Yup.string()
    .required("Description is required")
    .min(3, "Description should at least 3 digit characters"),
});
// step three
export const step_three_personalInformations_validation = Yup.object().shape({
  fullname: Yup.string()
    .required("Fullname is required")
    .min(3, "Fullname should at least 3 digit characters"),
  gender: Yup.string()
    .oneOf(["M", "F"], "Invalid Gender")
    .required("Gender Required"),
  age: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number be only digits")
    .required("Age is Required"),
  address: Yup.string().required("Address is required"),
});
