import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiKey } from "../services/api";

// Async thunk för att skapa en ny tenant
export const createTenant = createAsyncThunk(
  "tenant/createTenant",
  async (tenantName, { rejectWithValue }) => {
    try {
      // Hämta API-nyckel först
      const apiKey = await getApiKey();

      if (!apiKey) {
        throw new Error("Kunde inte hämta API-nyckel");
      }

      const API_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
      const response = await fetch(`${API_URL}/tenants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-zocom": apiKey,
        },
        body: JSON.stringify({ name: tenantName }),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skapa tenant");
      }

      const data = await response.json();
      console.log("Tenant skapad:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tenantSlice = createSlice({
  name: "tenant",
  initialState: {
    tenantId: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTenant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTenant.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tenantId = action.payload.id;
      })
      .addCase(createTenant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default tenantSlice.reducer;
