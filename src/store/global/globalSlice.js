import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furniture_api, set_info_api } from "../../utilrs/axiosInterceptors";


export const getHeaderData = createAsyncThunk(
  "glob/getHeaderData",
  async (_, { rejectWithValue, dispatch }) => {
    ["c76f7cef-f05f-4142-8a80-da88be374b66"].map(async (id, i) => {
      const res = await furniture_api.get("/category-top5/" + id);
      if(res.status === 200) {
        dispatch(setHeaderData({id: i+1, data: res.data}))
      }
    })
  }
)

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
    headerData : {}
  },
  reducers: {
    setHeaderData: (state, { payload }) => {
      console.log("payload : ", payload)
      state.headerData[payload.id] = payload.data
    },
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

export const {setHeaderData, setGlob, setFullFilled, setStory,setId } = globalSlice.actions;
export default globalSlice.reducer;
