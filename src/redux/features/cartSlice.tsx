import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count = state.count - 1;
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
