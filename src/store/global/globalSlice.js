import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globa",
  initialState: {
    isLogin: false,
    role: undefined,
    pd_active: undefined,
    fullfilled: false,
  },
  reducers: {
    setFullFilled: (state, { payload: { value } }) => {
      state.fullfilled = value;
    },
    setGlob: (state, { payload }) => {
      state[payload[0]] = payload[1];
    },
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload.isLogin;
      state.role = payload.role;
    },
  },
});

export const { setGlob, setFullFilled } = globalSlice.actions;
export default globalSlice.reducer;
