import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { set_info_api } from "../../utilrs/axiosInterceptors";
import { setFullFilled } from "../global/globalSlice";

const getFurnitureSetInfo = createAsyncThunk(
  "setInfo/getAll",
  async (_, { rejectWithValue }) => {
    const res = await set_info_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const getFurnitureSetInfoOfGroup = createAsyncThunk(
  "setInfo/getAllOfCategory",
  async (id, { rejectWithValue }) => {
    const res = await set_info_api.get("/group/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const deleteFurnitureSetInfo = createAsyncThunk(
  "setInfo/delete",
  async (id, { rejectWithValue, dispatch }) => {
    let set_info_res = await set_info_api.delete("/" + id);
    if (set_info_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return set_info_res.data;
    } else {
      rejectWithValue(set_info_res.data);
    }
  }
);

const updateFurnitureSetInfo = createAsyncThunk(
  "setInfo/update",
  async (data, { rejectWithValue, dispatch }) => {
    let set_info_res = await set_info_api.put("/" + data.id, data.data);
    if (set_info_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return set_info_res.data;
    } else {
      rejectWithValue(set_info_res.data);
    }
  }
);

const postFurnitureSetInfo = createAsyncThunk(
  "setInfo/add",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    let set_info_res = await set_info_api.post("/", {
      ...data,
      groupId: id,
    });
    if (set_info_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return set_info_res.data;
    } else {
      rejectWithValue(set_info_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  setInfos: [],
  error: null,
};

const furnitureGroupSlice = createSlice({
  name: "furnitureSetInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getFurnitureSetInfo.fulfilled]: (state, action) => {
      state.setInfos = action.payload;
    },
    [getFurnitureSetInfo.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [postFurnitureSetInfo.fulfilled]: (state, action) => {},
    [postFurnitureSetInfo.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [updateFurnitureSetInfo.fulfilled]: (state, action) => {},
    [updateFurnitureSetInfo.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [deleteFurnitureSetInfo.fulfilled]: (state, action) => {},
    [deleteFurnitureSetInfo.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [getFurnitureSetInfoOfGroup.fulfilled]: (state, action) => {
      state.setInfos = action.payload;
    },
    [getFurnitureSetInfoOfGroup.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
  },
});

export const { getFurnitureSetInfoById } = furnitureGroupSlice.actions;
export {
  getFurnitureSetInfo,
  postFurnitureSetInfo,
  updateFurnitureSetInfo,
  deleteFurnitureSetInfo,
  getFurnitureSetInfoOfGroup,
};
export default furnitureGroupSlice.reducer;
