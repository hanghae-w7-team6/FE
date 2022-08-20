import { instance } from "./instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postProductAsync = createAsyncThunk(
  "post/postProduct",
  async (data, thunkAPI) => {
    try {
      const res = await instance.post("http://localhost:3001/data", data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postProductAsync.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
  },
});

export default productSlice;
