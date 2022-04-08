import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import furnitureReducer from './furniture/furnitureSlice'
import furnitureSetInfoSlice from './furnitureSetInfo/furnitureSetInfoSlice'
import furnitureGroupSlice from './furnitureGroup/furnitureGroupSlice' 
import furnitureCategorySlice  from './furnitureCategory/furnitureCategorySlice'
import imageSlice from './image/imageSlice'
import productCartSlice from './productCart/productCartSlice'
import globalSlice from './global/globalSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    furniture:furnitureReducer,
    furnitureSetInfo: furnitureSetInfoSlice,
    furnitureGroup:furnitureGroupSlice,
    productCart: productCartSlice,
    image:imageSlice,
    global: globalSlice
  },
})
  
export default store;
