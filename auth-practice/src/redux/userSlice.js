import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: null,
    username: "",
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
