import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

// 초기값 선언
const initialState = { isIdUsable: false, isEmailUsable: false };

// thunk함수(회원가입) 선언
export const joinThunk = createAsyncThunk(
  "joinSlice/joinThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("/user/join", payload);
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); //통신 실패시 에러값 반환
    }
  }
);

// id중복확인 thunk함수
export const idCheckThunk = createAsyncThunk(
  "joinSlice/idCheckThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("/user/auth", {
        key: "userId",
        value: payload,
      });
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (iderror) {
      return thunkAPI.rejectWithValue(iderror.response.data); //통신 실패시 에러값 반환
    }
  }
);

// email 중복확인 thunk함수
export const emailCheckThunk = createAsyncThunk(
  "joinSlice/emailCheckThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("/user/auth", {
        key: "email",
        value: payload,
      });
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (emailerror) {
      return thunkAPI.rejectWithValue(emailerror.response.data); //통신 실패시 에러값 반환
    }
  }
);

// 슬라이스
const joinSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [joinThunk.fulfilled]: (state, action) => {
      //action.payload = response.data
      alert("가입이 완료되었습니다.");
      state = action.payload;
      window.location("/login");
    },
    [joinThunk.rejected]: (state, action) => {
      alert("다시 시도해주세요.");
      return (state.error = action.payload);
    },
    [idCheckThunk.fulfilled]: (state, action) => {
      state.isIdUsable = true;
      alert(action.payload.Message); // 사용 가능한 아이디 입니다.
    },
    [idCheckThunk.rejected]: (state, action) => {
      state.isIdUsable = false;
      alert(action.payload.errorMessage); // 중복된 아이디 입니다.
    },
    [emailCheckThunk.fulfilled]: (state, action) => {
      state.isEmailUsable = true;
      alert(action.payload.Message); // 사용 가능한 이메일 입니다.
    },
    [emailCheckThunk.rejected]: (state, action) => {
      state.isEmailUsable = false;
      alert(action.payload.errorMessage); // 중복된 이메일 입니다.
    },
  },
});

export default joinSlice;
