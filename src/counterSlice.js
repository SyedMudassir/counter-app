import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementBy: (state, action) => {
      state.counterValue += action.payload;
    },
    decrementBy: (state, action) => {
      state.counterValue -= action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
