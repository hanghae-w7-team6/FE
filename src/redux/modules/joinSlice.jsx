import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { instance } from "./instance";

// 초기값 선언
const initialState = {
  user: {},
};

// thunk함수(회원가입) 선언
export const joinThunk = createAsyncThunk(
  "joinSlice/joinThunk", // ? <-액션타입이 맞나...?
  async (payload, thunkAPI) => {
    //Inputfield에서 받아온 유저정보(=payload)를 이용
    try {
      const response = await instance.post("/User", payload);
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); //통신 실패시 에러값 반환
    }
  }
);

// id중복확인 thunk함수
export const idCheckThunk = createAsyncThunk(
  "joinSlice/idCheckThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.put("/User", payload);
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
      // return state.user.push(action.payload); //state=데이터가 저장되는 공간, thunk에서는 .push()사용 가능!
      // return current(state).user.push(action.payload); //immer....
      return (state = action.payload);
    },
    [joinThunk.rejected]: (state, action) => {
      alert("가입실패!!");
      return (state.error = action.payload); // 무지성으로 갖다가 쓰는 내용
    },
    // ! 중복검사 true/false 받아와서 setRuleDesc에 넣어주기! 그걸 모달에서 보여주기!
  },
});

export default joinSlice;
