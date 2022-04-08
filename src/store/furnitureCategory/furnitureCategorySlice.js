import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json";
const url = env.fCategoryUrl;

const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  updatePassword: {
    isLoading: false,
    error: null,
  },
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
    updateFurnitureCategory: (state, { id, furnitureCategory }) => {
      fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(furnitureCategory),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    /**
     * Assign the project to an employee.
     * @param {string} furnitureCategory.categoryName
     * @param {string} furnitureCategory.imageUrl
     */
    postFurnitureCategory: (state, furnitureCategory) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(furnitureCategory),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getFurnitureCategory: (state) => {
      fetch("http://localhost:5051/furniture-category/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getFurnitureCategoryById: (state, id) => {
      // id eklenir hale getir object sorunu verdi
      fetch(
        "http://localhost:5051/furniture-group/e4b80a57-ee33-4fcb-a5e3-cdaaaaaaaabb",
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
});

export const {
  getFurnitureCategory,
  getFurnitureCategoryById,
  postFurnitureCategory,
  updateFurnitureCategory,
} = furnitureCategorySlice.actions;
export default furnitureCategorySlice.reducer;
