import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from "../../env.json";
import { category_api, image_api } from "../../utilrs/axiosInterceptors";

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

const updateFurnitureCategory = createAsyncThunk(
  "category/update",
  async (data, { rejectWithValue, dispatch }) => {
    if (data.data?.imageSource) {
    }
    let category_res = await category_api.put("/" + data.id, data.data);
    if (category_res.status === 200) {
      dispatch(furnitureCategorySlice.actions.setFullFilled({ value: true }));
      return category_res.data;
    } else {
      rejectWithValue(category_res.data);
    }
  }
);

const postFurnitureCategory = createAsyncThunk(
  "category/add",
  async (data, { rejectWithValue, dispatch }) => {
    let image_res = await image_api.post("/", { imageSource: data.file });
    if (image_res.status === 200) {
      let category_res = await category_api.post("/", {
        imageUrl: image_res.data,
        categoryName: data.name,
      });
      if (category_res.status === 200) {
        dispatch(furnitureCategorySlice.actions.setFullFilled({ value: true }));
        return category_res.data;
      } else {
        rejectWithValue(category_res.data);
      }
    } else {
      rejectWithValue(image_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  fullfilled: false,
  categories: [],
  error: null,
};

const furnitureCategorySlice = createSlice({
  name: "furnitureCategory",
  initialState,
  reducers: {
    setFullFilled: (state, { payload: { value } }) => {
      state.fullfilled = value;
    },
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
  },
});

export const { getFurnitureCategoryById, setFullFilled } =
  furnitureCategorySlice.actions;
export { getFurnitureCategory, postFurnitureCategory, updateFurnitureCategory };
export default furnitureCategorySlice.reducer;
