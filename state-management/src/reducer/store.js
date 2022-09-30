import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../actions/counterSlice";

export const store = configureStore({
  reducer: {
    dataCounter: counterSlice,
  },
});
