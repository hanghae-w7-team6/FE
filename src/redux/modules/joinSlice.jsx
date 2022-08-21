import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

// 초기값 선언
const initialState = {
  // user: { userId: "", nickName: "", password: "", email: "" },
  user: [],
};

// thunk함수(회원가입) 선언
export const joinThunk = createAsyncThunk(
  "joinSlice/joinThunk", // ? <-액션타입이 맞나...?
  async (payload, thunkAPI) => {
    //Inputfield에서 받아온 유저정보(=payload)를 이용
    try {
      const response = await instance.post("/User", payload); // ! 멍청하게 api나오지도 않았는데 api명세서 주소로 접근했음
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
    console.log("idvalidcheck-payload", payload); // 인풋에 입력한 id내용이 올라옴!
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
  reducers: {
    // ADD_DATA: (state, action) => {
    //   console.log("joinslice값", state.join, action.payload);
    //   return { ...state, action.payload };
    // },
  },
  extraReducers: {
    [joinThunk.fulfilled]: (state, action) => {
      alert("가입성공!");
      return state.user.push(action.payload); //state=데이터가 저장되는 공간, thunk에서는 .push()사용 가능!
    },
    [joinThunk.rejected]: (state, action) => {
      alert("가입실패!!");
      return (state.error = action.payload); // 무지성으로 갖다가 쓰는 내용
    },
  },
});

export default joinSlice;

// 일반 리덕스 리듀서 export
// export const { ADD_DATA } = joinSlice.actions;
