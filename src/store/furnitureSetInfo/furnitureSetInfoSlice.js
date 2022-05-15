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



const getFurnitureSetTop5 = createAsyncThunk(
  "setInfo/getCategory-top5",
  async (id, { rejectWithValue }) => {
    const res = await set_info_api.get("/category-top5/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);


const getFurnitureSetByCategoryId = createAsyncThunk(
  "setInfo/getSetsByCategoryId",
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
  "setInfo/getSetsByCategoryId",
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

    [getFurnitureSetTop5.fulfilled]: (state, action) => {
      state.setInfosOnHover = action.payload;
    },
    [getFurnitureSetTop5.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
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
  getFurnitureSetTop5,
};
export default furnitureSetInfoSlice.reducer;
