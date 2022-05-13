import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import furnitureSetInfoSlice from "./furnitureSetInfo/furnitureSetInfoSlice";
import furnitureCategorySlice from "./furnitureCategory/furnitureCategorySlice";
import imageSlice from "./image/imageSlice";
import productCartSlice from "./productCart/productCartSlice";
import globalSlice from "./global/globalSlice";
import campaignSlice from "./campaign/campaignSlice";
import furnitureSlice from "./furniture/furnitureSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    campaign:campaignSlice,
    furniture: furnitureSlice,
    setInfo: furnitureSetInfoSlice,
    productCart: productCartSlice,
    category: furnitureCategorySlice,
    image: imageSlice,
    global: globalSlice,
  },
});

export default store;
