import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 초기값 선언
const initialState = { user: {}, idCheck: "", emailCheck: "", error: "" };

// thunk함수(회원가입) 선언
export const joinThunk = createAsyncThunk(
  "joinSlice/joinThunk",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://52.78.13.173/user/join",
        payload
      );
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (error) {
      return thunkAPI.rejectWithValue(error); //통신 실패시 에러값 반환
    }
  }
);

// id중복확인 thunk함수
export const idCheckThunk = createAsyncThunk(
  "joinSlice/idCheckThunk",
  async (payload, thunkAPI) => {
    console.log("dispatch를 타고 들어온 userId는", payload);
    try {
      const response = await axios.post("http://52.78.13.173/user/auth", {
        key: "userId",
        value: payload,
      });
      return thunkAPI.fulfillWithValue(response.data.message); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error); //통신 실패시 에러값 반환
    }
  }
);

// email 중복확인 thunk함수
export const emailCheckThunk = createAsyncThunk(
  "joinSlice/idCheckThunk",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://52.78.13.173/user/auth",
        payload
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); //통신 실패시 에러값 반환
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
      alert("가입성공!");
      return (state = action.payload);
    },
    [joinThunk.rejected]: (state, action) => {
      alert("가입실패!!");
      return (state.error = action.payload); // 무지성으로 갖다가 쓰는 내용
    },
    // ! 중복검사 true/false 받아와서 setRuleDesc에 넣어주기! 그걸 모달에서 보여주기!
    // [idCheckThunk.fulfilled]: (state, action) => {
    //   return (state.idCheck = action.payload);
    // },
    // [idCheckThunk.rejected]: (state, action) => {
    //   return (state.error = action.payload);
    // },
    // [emailCheckThunk.fulfilled]: (state, action) => {
    //   return (state.emailCheck = action.payload);
    // },
    // [emailCheckThunk.rejected]: (state, action) => {
    //   return (state.error = action.payload);
    // },
  },
});

export default joinSlice;
