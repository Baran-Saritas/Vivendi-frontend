import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furniture_api } from "../../utilrs/axiosInterceptors";

const getFurniture = createAsyncThunk(
  "furniture/getAll",
  async (_, { rejectWithValue }) => {
    const res = await furniture_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const getFurnitureById = createAsyncThunk(
  "furniture/getById",
  async (id, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.get("/" + id);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);
const deleteFurniture = createAsyncThunk(
  "furniture/delete",
  async (id, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.delete("/" + id);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const updateFurnitures = createAsyncThunk(
  "furniture/update",
  async (data, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.put("/" + data.id, data.data);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const postFurniture = createAsyncThunk(
  "furniture/add",
  async (data, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.post("/", data);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  furnitures: [],
  error: null,
};

export const FurnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {},
  extraReducers: {
    [getFurnitureById.fulfilled]: (state, action) => {},
    [getFurnitureById.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurniture.fulfilled]: (state, action) => {
      state.furnitures = action.payload;
    },
    [getFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [postFurniture.fulfilled]: (state, action) => {},
    [postFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [updateFurnitures.fulfilled]: (state, action) => {},
    [updateFurnitures.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [deleteFurniture.fulfilled]: (state, action) => {},
    [deleteFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
  },
});

export {
  getFurniture,
  postFurniture,
  updateFurnitures,
  deleteFurniture,
  getFurnitureById,
};

export default FurnitureSlice.reducer;
