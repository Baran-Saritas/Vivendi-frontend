import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { category_api } from "../../utilrs/axiosInterceptors";
import { setFullFilled } from "../global/globalSlice";

const getFurnitureCategory = createAsyncThunk(
  "category/getAll",
  async (_, { rejectWithValue }) => {
    const res = await category_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const deleteFurnitureCategory = createAsyncThunk(
  "category/delete",
  async (id, { rejectWithValue, dispatch }) => {
    let category_res = await category_api.delete("/" + id);
    if (category_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return category_res.data;
    } else {
      rejectWithValue(category_res.data);
    }
  }
);

const updateFurnitureCategory = createAsyncThunk(
  "category/update",
  async (data, { rejectWithValue, dispatch }) => {
    let category_res = await category_api.put("/" + data.id, data.data);
    if (category_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return category_res.data;
    } else {
      rejectWithValue(category_res.data);
    }
  }
);

const postFurnitureCategory = createAsyncThunk(
  "category/add",
  async ({ data }, { rejectWithValue, dispatch }) => {
    console.log("DATA : ", data);
    return;
    let category_res = await category_api.post("/", data);
    if (category_res.status === 200) {
      dispatch(setFullFilled({ value: true }));
      return category_res.data;
    } else {
      rejectWithValue(category_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

const furnitureCategorySlice = createSlice({
  name: "furnitureCategory",
  initialState,
  reducers: {
    /**
     * Assign the project to an employee.
     * @param {string} furnitureCategory.categoryName
     * @param {string} furnitureCategory.imageUrl
     */
    getFurnitureCategoryById: (state, { payload: { id } }) => {
      // id eklenir hale getir object sorunu verdi
      fetch(
        "http://213.142.148.105:5054/furniture-category/9846e8db-1116-4715-9322-0f944185e051",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  extraReducers: {
    [getFurnitureCategory.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getFurnitureCategory.rejected]: (state, action) => {
      console.log("Category err : ", action.payload);
    },
    [postFurnitureCategory.fulfilled]: (state, action) => {},
    [postFurnitureCategory.rejected]: (state, action) => {
      console.log("Category err : ", action.payload);
    },
    [updateFurnitureCategory.fulfilled]: (state, action) => {},
    [updateFurnitureCategory.rejected]: (state, action) => {
      console.log("Category err : ", action.payload);
    },
    [deleteFurnitureCategory.fulfilled]: (state, action) => {},
    [deleteFurnitureCategory.rejected]: (state, action) => {
      console.log("Category err : ", action.payload);
    },
  },
});

export const { getFurnitureCategoryById } = furnitureCategorySlice.actions;
export {
  getFurnitureCategory,
  postFurnitureCategory,
  updateFurnitureCategory,
  deleteFurnitureCategory,
};
export default furnitureCategorySlice.reducer;
