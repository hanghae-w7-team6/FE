import { instance } from "./instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const getCartAysnc = createAsyncThunk(
  "get/CartList",
  async (data, thunkAPI) => {
    try {
      const res = await instance.get("/cart");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCartAysnc = createAsyncThunk(
  "delete/CartList",
  async (data, thunkAPI) => {
    try {
      const res = await instance.delete(`/cart/${data}`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editCartAysnc = createAsyncThunk(
  "edit/CartList",
  async (data, thunkAPI) => {
    try {
      const res = await instance.put(`/cart/${data.productId}`, data.quantity);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addCartAysnc = createAsyncThunk(
  "add/CartList",
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/cart/${data.productId}`, data.quantity);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAysnc.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(deleteCartAysnc.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
      }))
      .addCase(addCartAysnc.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
      }))
      .addCase(editCartAysnc.fulfilled, (state, aciont) => ({
        ...state,
        message: aciont.payload,
      }));
  },
});
