import { createSlice } from "@reduxjs/toolkit";
import { image_api } from "../../utilrs/axiosInterceptors";
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
    deleteImage: (state, { payload }) => {
      image_api
        .delete("/" + payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("ERR", err);
        });
    },
    updateImage: (state, { id, image }) => {},
    postImage: (state, image) => {},
    getImages: (state) => {},
    getImageById: (state, id) => {},
  },
});

export const { getImages, getImageById, updateImage, postImage, deleteImage } =
  imageSlice.actions;
export default imageSlice.reducer;
