import { createSlice } from "@reduxjs/toolkit";

export const borrowerSlice = createSlice({
  name: "borrower",
  initialState: {
    bookCart: [],
  },

  reducers: {
    set_addBookToCart: (state, { payload }) => {
      state.bookCart.push(payload);
    },
    set_removeBookToCart: (state, { payload }) => {
      const newBookCart = state.bookCart.filter(
        (book) => book.bookId !== payload.bookId
      );
      state.bookCart = newBookCart;
    },
    set_resetBookToCart: (state) => {
      state.bookCart = [];
    },
  },
});
export const bookCart = (state) => state.borrower.bookCart;
export const { set_addBookToCart, set_removeBookToCart, set_resetBookToCart } =
  borrowerSlice.actions;
export default borrowerSlice.reducer;
