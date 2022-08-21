import { configureStore } from "@reduxjs/toolkit";
import joinSlice from "../modules/joinSlice";

const store = configureStore({
  reducer: {
    join: joinSlice.reducer,
  },
  //   배포 환경일 때, devTools가 false가 된다.
  devTools: process.env.NODE_ENV !== "development",
});

export default store;
