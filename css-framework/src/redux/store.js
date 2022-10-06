import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./toDoSlice";

export const store = configureStore({
  reducer: {
    toDoSlice,
  },
});
