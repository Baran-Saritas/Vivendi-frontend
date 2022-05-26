import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  furniture_api,
  product_api,
  set_info_api,
} from "../../utilrs/axiosInterceptors";

export const getHeaderData = createAsyncThunk(
  "glob/getHeaderData",
  async (_, { rejectWithValue, dispatch }) => {
    const data = {
      categories: [
        "c76f7cef-f05f-4142-8a80-da88be374b66",
        "ca333a93-4630-4cd9-8176-2969887072c2",
        "ea6b1aaf-65c0-4023-9248-cfa2ac8e3cbc",
        "a76ec128-c8be-4234-be0c-158518585153",
        "a76ec128-c8be-4234-be0c-158518585153",
      ],
    };
    product_api.post("/furniture/category/top/5", data).then((res) => {
      res.data.entities.forEach((j, i) => {
        dispatch(
          setHeaderData({ id: i + 1, target: "headerFurnitureData", data: j })
        );
      });
    });
    product_api.post("/set/category/top/5", data).then((res) => {
      res.data.entities.forEach((j, i) => {
        dispatch(
          setHeaderData({ id: i + 1, target: "headerSetData", data: j })
        );
      });
    });
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLogin: false,
    role: undefined,
    pd_active: undefined,
    fullfilled: false,
    storyEndDialog: false,
    addedSetFurnitures: [],
    closeDrawer: true,
    setIdValue: 0,
    headerFurnitureData: {},
    headerSetData: {},
    searchData:{},
  },
  reducers: {
    setHeaderData: (state, { payload }) => {
      state[payload.target][payload.id] = payload.data;
      //state.headerFurnitureData[payload.id] = payload.data
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
    setSearchData: (state, { payload}) => {
      state.searchData = payload;
    },
  },
});

export const { setHeaderData, setGlob, setFullFilled, setStory, setId,setSearchData } =
  globalSlice.actions;
export default globalSlice.reducer;
