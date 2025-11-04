import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/productSlice";
import cartSlice from "../redux/features/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    addToCart: cartSlice,
  },
});

export default store;
