import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json";
const url = env.imageUrl;
const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  updatePassword: {
    isLoading: false,
    error: null,
  },
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    /**
     * Assign the project to an employee.
     * @param {string} image.imageSource
     */
    updateImage: (state, { id, image }) => {
      fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(image),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    /**
     * Assign the project to an employee.
     * @param {string} image.imageSource
     */
    postImage: (state, image) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(image),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getImages: (state) => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getImageById: (state, id) => {
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
  getImages,
  getImageById,
  updateImage,
  postImage,
} = imageSlice.actions;
export default imageSlice.reducer;
