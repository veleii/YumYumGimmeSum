import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrder } from "../services/api";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (items, { rejectWithValue }) => {
    let tenantId = localStorage.getItem("tenantId");

    try {
      const response = await sendOrder(tenantId, items);
      console.log(response);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
