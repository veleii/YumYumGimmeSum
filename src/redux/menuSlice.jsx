import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiKey, getMenu, createTenant } from "../services/api";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  try {
    // Get API key
    const apiKey = await getApiKey();
    if (!apiKey) throw new Error("Ingen API-nyckel hämtades");

    // Check for existing tenantId
    let tenantId = localStorage.getItem("tenantId");

    // More comprehensive check for invalid tenantId values
    if (
      tenantId === null ||
      tenantId === "undefined" ||
      tenantId === "null" ||
      tenantId === ""
    ) {
      console.log("No valid tenantId found, creating new tenant");

      localStorage.removeItem("tenantId");

      try {
        tenantId = await createTenant("velei1");
        console.log("New tenant created:", tenantId);

        localStorage.setItem("tenantId", tenantId);
      } catch (error) {
        console.error("Failed to create tenant:", error);
        throw new Error("Could not create tenant: " + error.message);
      }
    } else {
    }

    const menuData = await getMenu(apiKey);
    if (!menuData || !menuData.items) {
      throw new Error("Invalid menu data received");
    }

    return menuData.items;
  } catch (error) {
    console.error("Error in fetchMenu:", error);
    throw error;
  }
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    dips: [],
    drinks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.filter(
          (item) => item.type !== "drink" && item.type !== "dip"
        );
        state.dips = action.payload.filter((item) => item.type === "dip");
        state.drinks = action.payload.filter((item) => item.type === "drink");
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
