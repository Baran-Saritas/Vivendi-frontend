import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furniture_api, set_info_api } from "../../utilrs/axiosInterceptors";

export const getHeaderData = createAsyncThunk(
  "glob/getHeaderData",
  async (_, { rejectWithValue, dispatch }) => {
    [
      "c76f7cef-f05f-4142-8a80-da88be374b66",
      "ca333a93-4630-4cd9-8176-2969887072c2",
      "ea6b1aaf-65c0-4023-9248-cfa2ac8e3cbc",
      "a76ec128-c8be-4234-be0c-158518585153",
      "635e94eb-75ac-4933-a75c-07a21db3a319",
      "775f98ce-a2f2-4c9b-bd70-fcb99481af9a",
      "888cce34-8ce8-4207-9628-be245d6930c0",
      "1161f244-93cb-4415-9940-d2ceb6ea3a7c",
      "e557af58-0800-4ac6-8783-8ecc9f7cf337",
      "f48538c8-e405-4e5b-bea7-28d948aba48a",
    ].map(async (id, i) => {
      set_info_api.get("/category-top5/" + id).then((res) => {
        dispatch(
          setHeaderData({ id: i + 1, target: "headerSetData", data: res.data })
        );
      });
      furniture_api.get("/category-top5/" + id).then((res) => {
        dispatch(
          setHeaderData({
            id: i + 1,
            target: "headerFurnitureData",
            data: res.data,
          })
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
  },
});

export const { setHeaderData, setGlob, setFullFilled, setStory, setId } =
  globalSlice.actions;
export default globalSlice.reducer;
