import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json";
const url = env.furnitureUrl;
const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  updatePassword: {
    isLoading: false,
    error: null,
  },
};

export const FurnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    /**
     * Assign the project to an employee.
     * @param {string} furniture.height
     * @param {string} furniture.width
     * @param {string} furniture.depth
     * @param {string} furniture.color
     * @param {string} furniture.name
     * @param {string} furniture.imageUrl
     * @param {Number} furniture.price
     * @param {string} furniture.description
     */
    updateFurniture: (state, { id, furniture }) => {
      fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(furniture),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    /**
     * Assign the project to an employee.
     * @param {string} furniture.height
     * @param {string} furniture.width
     * @param {string} furniture.depth
     * @param {string} furniture.color
     * @param {string} furniture.name
     * @param {string} furniture.imageUrl
     * @param {Number} furniture.price
     * @param {string} furniture.description
     */
    postFurniture: (state, furniture) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(furniture),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getFurnitures: (state) => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getFurnitureById: (state, id) => {
      // id eklenir hale getir object sorunu verdi
      fetch(url + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
});

export const {
  getFurnitures,
  getFurnitureById,
  postFurniture,
  updateFurniture,
} = FurnitureSlice.actions;
export default FurnitureSlice.reducer;
