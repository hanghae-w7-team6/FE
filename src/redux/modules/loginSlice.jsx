import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";
import axios from "axios";

const initialState = {};

// 로그인 thunk
export const loginThunk = createAsyncThunk(
  "loginSlice/loginThunk",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://52.78.13.173/user/login",
        payload
      );
      localStorage.setItem("token", response.data.token);
      alert("로그인성공");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [loginThunk.rejected]: (state, action) => {
      return (state.error = action.payload);
    },
  },
});

export default loginSlice;
