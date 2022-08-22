import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

const initialState = {};

export const loginThunk = createAsyncThunk(
  "loginSlice/loginThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default loginSlice;
