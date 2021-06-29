import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    searchBookResult: [],
    bookCart: [],
  },

  reducers: {
    set_searchBookResult: (state, { payload }) => {
      state.searchBookResult = payload;
    },
    set_bookCart: (state, { payload }) => {
      state.bookCart = payload;
    },
    set_searchBookResult_empty: (state, { payload }) => {
      state.searchBookResult = [];
    },
  },
});
export const searchBookResult = (state) => state.book.searchBookResult;
export const bookCart = (state) => state.book.bookCart;
export const {
  set_searchBookResult,
  set_bookCart,
  set_searchBookResult_empty,
} = bookSlice.actions;
export default bookSlice.reducer;
