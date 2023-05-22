import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import axios from "axios";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuSlice
  },
});
