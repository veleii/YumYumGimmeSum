import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";
import tenantReducer from "./tenantSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    tenant: tenantReducer,
    order: orderReducer,
  },
});

export default store;
