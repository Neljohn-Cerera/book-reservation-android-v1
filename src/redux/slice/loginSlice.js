import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedin: false,
  },

  reducers: {
    set_isLoggedin_true: (state) => {
      state.isLoggedin = true;
    },
    set_isLoggedin_false: (state) => {
      state.isLoggedin = false;
    },
  },
});
export const token = (state) => state.login.token;
export const isLoggedin = (state) => state.login.isLoggedin;
export const { set_isLoggedin_true, set_isLoggedin_false } = loginSlice.actions;
export default loginSlice.reducer;
