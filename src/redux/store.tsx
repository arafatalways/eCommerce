import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/productSlice";
import cartReducer from "../redux/features/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    addToCart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
