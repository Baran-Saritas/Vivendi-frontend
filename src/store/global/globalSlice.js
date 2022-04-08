import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "globa",
    initialState: {
        pd_active: undefined
    },
    reducers: {
        setGlob: (state, { payload }) => {
            state[payload[0]] = payload[1];
        }
    }
})

export const {
    setGlob
  } = globalSlice.actions;
  export default globalSlice.reducer;