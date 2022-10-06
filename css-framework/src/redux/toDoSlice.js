import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["Coding", "Eat", "Drink"],
  count: 3,
};

export const toDoSlice = createSlice({
  name: "to-do",
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.value.push(action.payload);
      state.count += 1;
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
      state.count -= 1;
    },
    edit: (state, action) => {
      //   console.log(action.payload);
      const { index, inputFromUser } = action.payload;
      state.value.splice(index, 1, inputFromUser);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNew, remove, edit } = toDoSlice.actions;

export default toDoSlice.reducer;
