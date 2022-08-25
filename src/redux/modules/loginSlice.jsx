import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

const initialState = {
  user: {},
  isLoggedIn: false,
};

// 로그인 thunk
export const loginThunk = createAsyncThunk(
  "loginSlice/loginThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("/user/login", payload);
      localStorage.setItem("token", response.data.token); // 로그인 요청을 보낸 후 response에 담긴 token을 로컬스토리지에 저장
      // console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      alert(error.response.data.errorMessage); // 에러 발생시 메시지 출력
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => ({
      ...state,
      isLoggedIn: true,
    }),
  },
});

export default loginSlice;
