import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },

  reducers: {
    set_darkMode_false: (state) => {
      state.isDarkMode = false;
    },
    set_darkMode_true: (state) => {
      state.isDarkMode = true;
    },
  },
});
export const isDarkMode = (state) => state.theme.isDarkMode;
export const { set_darkMode_false, set_darkMode_true } = themeSlice.actions;
export default themeSlice.reducer;
