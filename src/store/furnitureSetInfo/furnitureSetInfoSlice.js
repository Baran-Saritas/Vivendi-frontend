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

const getFurnitureSetByCategoryId = createAsyncThunk(
  "furniture/getSetsByCategoryId",
  async (id, { rejectWithValue }) => {
    const res = await set_info_api.get("/category/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);
const getFurnitureSetByCategoryIdOnHover = createAsyncThunk(
  "furniture/getSetsByCategoryId",
  async (id, { rejectWithValue }) => {
    const res = await set_info_api.get("/category/" + id);
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
  setInfosOnHover: [],
  error: null,
};

const furnitureSetInfoSlice = createSlice({
  name: "furnitureSetInfo",
  initialState,
  reducers: {},
  extraReducers: {

    [getFurnitureSetByCategoryIdOnHover.fulfilled]: (state, action) => {
      state.setInfosOnHover = action.payload;
    },
    [getFurnitureSetByCategoryIdOnHover.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureSetByCategoryId.fulfilled]: (state, action) => {
      state.setInfos = action.payload;
    },
    [getFurnitureSetByCategoryId.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureSetInfo.fulfilled]: (state, action) => {},
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

export const { getFurnitureSetInfoById } = furnitureSetInfoSlice.actions;
export {
  getFurnitureSetInfo,
  postFurnitureSetInfo,
  updateFurnitureSetInfo,
  deleteFurnitureSetInfo,
  getFurnitureSetInfoOfGroup,
  getFurnitureSetByCategoryId,
  getFurnitureSetByCategoryIdOnHover,
};
export default furnitureSetInfoSlice.reducer;
