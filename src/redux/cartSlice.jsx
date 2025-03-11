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
        existingItem.quantity += 1; // Om varan redan finns i varukorgen, öka mängden
      } else {
        state.items.push({ ...item, quantity: 1 }); // Lägg till varan om den inte finns
      }

      state.totalAmount += item.price; // Lägg till priset för den nya varan
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        // Om mängden är större än 1, minska mängden
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price; // Minska totalbeloppet
        } else {
          // Om mängden är 1, ta bort objektet från listan
          state.totalAmount -= item.price;
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
