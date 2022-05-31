import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { category_api, product_api } from "../../utilrs/axiosInterceptors";

export const getHeaderAndData = createAsyncThunk(
  "glob/getHeaderAndData",
  async (_, { rejectWithValue, dispatch }) => {
    let category_res = await category_api.get("/category");
    if (category_res.status === 200) {
      let data = { categories: category_res.data.map((i) => i.id) };
      product_api.post("/furniture/category/top/5", data).then((res) => {
        let data = {};
        res.data.entities.map((i, j) => {
          data[j + 1] = i;
        });
        dispatch(setFurnitureData(data));
      });
      product_api.post("/set/category/top/5", data).then((res) => {
        let data = {};
        res.data.entities.map((i, j) => {
          data[j + 1] = i;
        });
        dispatch(setSetData(data));
      });
      return category_res.data;
    } else {
      rejectWithValue(category_res.data);
    }
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
    categories: [],
    setIdValue: 0,
    headerFurnitureData: {},
    headerSetData: {},
    searchData: {},
  },
  reducers: {
    setHeaderData: (state, { payload }) => {
      state[payload.target][payload.id] = payload.data;
      //state.headerFurnitureData[payload.id] = payload.data
    },
    setFurnitureData: (state, { payload }) => {
      state.headerFurnitureData = payload;
    },
    setSetData: (state, { payload }) => {
      state.headerSetData = payload;
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
    setSearchData: (state, { payload }) => {
      state.searchData = payload;
    },
  },
  extraReducers: {
    [getHeaderAndData.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getHeaderAndData.rejected]: (state, action) => {
      console.log("Category err : ", action.payload);
    },
  },
});

export const {
  setHeaderData,
  setGlob,
  setFullFilled,
  setStory,
  setId,
  setSearchData,
  setFurnitureData,
  setSetData,
} = globalSlice.actions;
export default globalSlice.reducer;
