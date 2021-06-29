import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: true,
    user: {},
    user_id: "",
  },

  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
    },
    set_user: (state, { payload }) => {
      state.user = payload;
    },
    set_user_id: (state, { payload }) => {
      state.user_id = payload;
    },
    set_user_id_empty: (state) => {
      state.user_id = "";
    },
  },
});
export const logginstate = (state) => state.user.isLoggedIn;
export const user = (state) => state.user.user;
export const user_id = (state) => state.user.user_id;
export const { loggedIn, loggedOut, set_user, set_user_id } = userSlice.actions;
export default userSlice.reducer;
