import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    step: 1,
    account_info: {},
    school_info: {
      studentid: "",
      course: "",
      courseyear: "",
      teacherid: "",
      jobstate: "",
      department: "",
      employeeid: "",
      description: "",
    },
    school_role: "",
    personal_info: {},
  },

  reducers: {
    setStep: (state, { payload }) => {
      state.step = payload;
    },
    set_accountInfo: (state, { payload }) => {
      state.account_info = payload;
    },
    set_schoolInfo: (state, { payload }) => {
      state.school_info = payload;
    },
    set_schoolRole: (state, { payload }) => {
      state.school_role = payload;
    },
    set_personalInfo: (state, { payload }) => {
      state.personal_info = payload;
    },
  },
});
export const step = (state) => state.signup.step;
export const account_info = (state) => state.signup.account_info;
export const school_info = (state) => state.signup.school_info;
export const school_role = (state) => state.signup.school_role;
export const personal_info = (state) => state.signup.personal_info;
export const {
  setStep,
  set_accountInfo,
  set_schoolInfo,
  set_schoolRole,
  set_personalInfo,
} = signupSlice.actions;
export default signupSlice.reducer;
