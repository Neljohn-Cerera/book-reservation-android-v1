import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import signupReducer from "./slice/signupSlice";
import loginReducer from "./slice/loginSlice";
import bookReducer from "./slice/bookSlice";
import borrowerReducer from "./slice/borrowerSlice";
import themeSlice from "./slice/themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
    login: loginReducer,
    book: bookReducer,
    borrower: borrowerReducer,
    theme: themeSlice,
  },
});
