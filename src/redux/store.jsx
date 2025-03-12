import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";
import tenantReducer from "./tenantSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    tenant: tenantReducer,
  },
});

export default store;
