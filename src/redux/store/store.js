import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../modules/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;
