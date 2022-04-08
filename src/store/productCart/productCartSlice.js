import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    isLogin: false,
    productList: [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Live From Space",
            price:1000,
            count: 1
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Live From Space 2",
            price:2500,
            count: 1
        }
    ],
    shoppingCartProduct: {
      totalCount :0
    },
    totalPrice:{
        price:0
    }
  };

const productCartSlice = createSlice({
    name: "productCart",
    initialState,
    reducers:  {
        toIncreaseProductCount(state, action){
           state.productList.map(i => {
               if(i.id === action.payload.id){
               state.totalPrice.price += i.price;
                i.count++;
           }
           })
           state.shoppingCartProduct.totalCount +=1;
        },
        toReduceProductCount(state, action){ 
            state.productList.map(i => {
                if(i.id === action.payload.id) {
                   state.totalPrice.price = state.totalPrice.price <= 0 ? 0:state.totalPrice.price - i.price ;
                 i.count = i.count <= 0 ? 0 : i.count - 1;
                }
            })
            state.shoppingCartProduct.totalCount = state.shoppingCartProduct.totalCount <= 1 ? 0 : (state.shoppingCartProduct.totalCount -1)
            state.productList = state.productList.filter(i => i.count > 0)
        }
    }
})

export const {toIncreaseProductCount,toReduceProductCount } = productCartSlice.actions;
export default productCartSlice.reducer;