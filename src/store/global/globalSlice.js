import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globa",
  initialState: {
    isLogin: false,
    role: undefined,
    pd_active: undefined,
  },
  reducers: {
    setGlob: (state, { payload }) => {
      state[payload[0]] = payload[1];
    },
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload.isLogin;
      state.role = payload.role;
    },
  },
});

export const { setGlob } = globalSlice.actions;
export default globalSlice.reducer;
