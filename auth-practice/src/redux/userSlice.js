import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: null,
    username: "",
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      // action.payload = {}
      state.value.id = action.payload.id;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.id = null;
      state.value.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
