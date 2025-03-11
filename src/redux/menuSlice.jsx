import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiKey, getMenu } from "../services/api";

// Async thunk för att hämta menyn
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const apiKey = await getApiKey();
  if (!apiKey) throw new Error("Ingen API-nyckel hämtades");
  const menuData = await getMenu(apiKey);
  return menuData.items;
});

const menuSlice = createSlice({
  name: "menu",
  initialState: { items: [], dips: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.filter(
          (item) => item.type !== "drink" && item.type !== "dip"
        );
        state.dips = action.payload.filter((item) => item.type === "dip");
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
