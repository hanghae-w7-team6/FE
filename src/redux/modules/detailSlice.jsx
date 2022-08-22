import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "./instance";

const initialState = {};

export const loadProductThunk = createAsyncThunk(
  "product/loadProduct",
  async (thunkAPI) => {
    try {
      const res = await instance.get("/Product");
      return res.data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductThunk.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default detailSlice;
