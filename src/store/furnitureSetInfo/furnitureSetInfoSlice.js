import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { product_api, set_info_api } from "../../utilrs/axiosInterceptors";
import { setFullFilled } from "../global/globalSlice";

const getFurnitureSetInfo = createAsyncThunk(
  "setInfo/getAll",
  async (_, { rejectWithValue }) => {
    const res = await product_api.get("/set");
    //const res = await set_info_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const postSetCoupon = createAsyncThunk(
  "set/addCoupon",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    let furniture_res = await product_api.post("/set/coupon/" + id, data);
    if (furniture_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const getFurnitureSetById = createAsyncThunk(
  "setInfo/getById",
  async (id, { rejectWithValue }) => {
    const res = await set_info_api.get("/" + id);
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
    //let set_info_res = await set_info_api.delete("/" + id);
    let set_info_res = await product_api.delete("/set/" + id);
    if (set_info_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return set_info_res.data;
    } else {
      rejectWithValue(set_info_res.data);
    }
  }
);

const deleteImage = createAsyncThunk(
  "set/deleteImage",
  async (id, { rejectWithValue }) => {
    let set_res = await product_api.delete("/set/image/" + id);
    if (set_res.status === 200) {
      return set_res.data;
    } else {
      rejectWithValue(set_res.data);
    }
  }
);

const updateFurnitureSetInfo = createAsyncThunk(
  "setInfo/update",
  async (data, { rejectWithValue, dispatch }) => {
    //let set_info_res = await set_info_api.put("/" + data.id, data.data);
    let set_info_res = await product_api.put("/set", data);
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
  async (data, { rejectWithValue, dispatch }) => {
    let set_info_res = await product_api.post("/set", data);
    if (set_info_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      dispatch(addSet({ data: set_info_res.data }));
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
  activeSet: [],
};

const furnitureSetInfoSlice = createSlice({
  name: "furnitureSetInfo",
  initialState,
  reducers: {
    setActiveSet: (state, { payload }) => {
      state.activeSet = payload;
    },
    addSet: (state, { payload }) => {
      if (payload.data) {
        state.setInfos.push(payload.data);
      }
    },
    removeSet: (state, { payload }) => {
      if (payload.id) {
        state.setInfos = state.setInfos.filter((i) => i !== i.id);
      }
    },
  },
  extraReducers: {
    [getFurnitureSetById.fulfilled]: (state, action) => {
      state.setInfosOnHover = action.payload;
    },
    [getFurnitureSetById.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
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
    [deleteImage.fulfilled]: (state, action) => {
      console.log("IMAGE DELETED");
    },
    [deleteImage.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { getFurnitureSetInfoById, setActiveSet, removeSet, addSet } =
  furnitureSetInfoSlice.actions;
export {
  getFurnitureSetInfo,
  postFurnitureSetInfo,
  updateFurnitureSetInfo,
  deleteFurnitureSetInfo,
  getFurnitureSetInfoOfGroup,
  getFurnitureSetByCategoryId,
  getFurnitureSetByCategoryIdOnHover,
  getFurnitureSetTop5,
  getFurnitureSetById,
  deleteImage,
  postSetCoupon,
};
export default furnitureSetInfoSlice.reducer;
