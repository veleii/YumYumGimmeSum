import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price;
        } else {
          state.totalAmount -= item.price;
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
