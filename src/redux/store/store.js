import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../modules/detailSlice";
import { productSlice } from "../modules/productSlice";
import joinSlice from "../modules/joinSlice";

const store = configureStore({
  reducer: {
    join: joinSlice.reducer,
    product: productSlice.reducer,
    detail: detailSlice.reducer,
  },
  //   배포 환경일 때, devTools가 false가 된다.
  devTools: process.env.NODE_ENV !== "development",

});

export default store;
