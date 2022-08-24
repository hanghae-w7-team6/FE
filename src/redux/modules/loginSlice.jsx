import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

const initialState = {};

// 로그인 thunk
export const loginThunk = createAsyncThunk(
  "loginSlice/loginThunk",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await instance.post("/user/login", payload);
      alert("로그인성공");
      localStorage.setItem("token", response.data.token);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.error(error);
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
