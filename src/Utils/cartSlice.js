import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    //these funcs don't return anything. They directly modift the state.
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
