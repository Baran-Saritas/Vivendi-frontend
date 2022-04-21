import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { group_api } from "../../utilrs/axiosInterceptors";
import { setFullFilled } from "../global/globalSlice";

const getFurnitureGroup = createAsyncThunk(
  "group/getAll",
  async (_, { rejectWithValue }) => {
    const res = await group_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const getFurnitureGroupOfCategory = createAsyncThunk(
  "group/getAllOfCategory",
  async (id, { rejectWithValue }) => {
    const res = await group_api.get("/category/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const deleteFurnitureGroup = createAsyncThunk(
  "group/delete",
  async (id, { rejectWithValue, dispatch }) => {
    let group_res = await group_api.delete("/" + id);
    if (group_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return group_res.data;
    } else {
      rejectWithValue(group_res.data);
    }
  }
);

const updateFurnitureGroup = createAsyncThunk(
  "group/update",
  async (data, { rejectWithValue, dispatch }) => {
    let group_res = await group_api.put("/" + data.id, data.data);
    if (group_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return group_res.data;
    } else {
      rejectWithValue(group_res.data);
    }
  }
);

const postFurnitureGroup = createAsyncThunk(
  "group/add",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    let group_res = await group_api.post("/", {
      ...data,
      categoryId: id,
    });
    if (group_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return group_res.data;
    } else {
      rejectWithValue(group_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  groups: [],
  error: null,
};

const furnitureGroupSlice = createSlice({
  name: "furnitureGroup",
  initialState,
  reducers: {},
  extraReducers: {
    [getFurnitureGroup.fulfilled]: (state, action) => {},
    [getFurnitureGroup.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [postFurnitureGroup.fulfilled]: (state, action) => {},
    [postFurnitureGroup.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [updateFurnitureGroup.fulfilled]: (state, action) => {},
    [updateFurnitureGroup.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [deleteFurnitureGroup.fulfilled]: (state, action) => {},
    [deleteFurnitureGroup.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
    [getFurnitureGroupOfCategory.fulfilled]: (state, action) => {
      state.groups = action.payload;
    },
    [getFurnitureGroupOfCategory.rejected]: (state, action) => {
      console.log("Group err : ", action.payload);
    },
  },
});

export const { getFurnitureGroupById } = furnitureGroupSlice.actions;
export {
  getFurnitureGroup,
  postFurnitureGroup,
  updateFurnitureGroup,
  deleteFurnitureGroup,
  getFurnitureGroupOfCategory,
};
export default furnitureGroupSlice.reducer;
