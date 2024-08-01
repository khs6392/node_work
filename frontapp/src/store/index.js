import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { username: "홍길동", email: "tlr6392@naver.com" },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

const countSlice = createSlice({
  name: "countSlice",
  initialState: { count: 0 },
  reducers: {
    up: (state, action) => {
      //   state.count += action.inc;
      state.count += action.payload;
    },
    down: (state, action) => {
      //   state.count -= action.inc;
      state.count -= action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter: countSlice.reducer,
    login: loginSlice.reducer,
  },
});

export { countSlice, store, loginSlice };
