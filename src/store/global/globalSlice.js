import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLogin: false,
    role: undefined,
    pd_active: undefined,
    fullfilled: false,
    storyEndDialog: false,
    addedSetFurnitures:[],
    closeDrawer:true,
    setIdValue:0,
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
    setStory: (state, { payload: { value } }) => {
      state.storyEndDialog = value;
    },
    setId: (state, { payload: { value } }) => {
      state.setIdValue = value;
    },
  },
});

export const { setGlob, setFullFilled, setStory,setId } = globalSlice.actions;
export default globalSlice.reducer;
