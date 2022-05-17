import { createSlice } from "@reduxjs/toolkit";
import { CgKey } from "react-icons/cg";

const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  productList: [],
  shoppingCartProduct: {
    totalCount: 0,
  },
  totalPrice: {
    price: 0,
  },
};

const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let item = { ...action.payload.item };
      let check = state.productList.filter((i) => i.id === item.id);
      if (!check.length) {
        item.count = 1;
        state.productList.push(item);
        state.totalPrice.price += item.price;
        state.shoppingCartProduct.totalCount += 1;
      }
    },
    toIncreaseProductCount(state, action) {
      state.productList.map((i) => {
        if (i.id === action.payload.id) {
          state.totalPrice.price += i.price;
          i.count++;
          state.shoppingCartProduct.totalCount += 1;
        }
      });
    },
    toReduceProductCount(state, action) {
      state.productList.map((i) => {
        if (i.id === action.payload.id) {
          state.totalPrice.price =
            state.totalPrice.price <= 0 ? 0 : state.totalPrice.price - i.price;
          i.count = i.count <= 0 ? 0 : i.count - 1;
        }
      });
      state.shoppingCartProduct.totalCount =
        state.shoppingCartProduct.totalCount <= 1
          ? 0
          : state.shoppingCartProduct.totalCount - 1;
      state.productList = state.productList.filter((i) => i.count > 0);
    },
  },
});

export const { toIncreaseProductCount, toReduceProductCount, addToCart } =
  productCartSlice.actions;
export default productCartSlice.reducer;
