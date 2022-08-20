import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../modules/detailSlice";

export const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
  },
});
