import { createSlice } from "@reduxjs/toolkit"
import { findCart } from "./cartActions"

const initialState = {
    isLoading: false,
    error: '',
    products: [],
    totalAmount: 0,
    _id: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action)=>{
            const product = action.payload;
            return {
              ...state,
              products: [...state.products, product],
              totalAmount: state.totalAmount + product.product.prix,
            };
        },
        REMOVE_FROM_CART: (state, action)=>{
            const productId = action.payload;
            const updatedProducts = state.products.filter(item => item.product._id !== productId);
            const removedProduct = state.products.find(item => item.product._id === productId);
            const updatedTotalAmount = state.totalAmount - (removedProduct.product.prix * removedProduct.count);
            return {
              ...state,
              products: updatedProducts,
              totalAmount: updatedTotalAmount,
            };
        },
        INCREMENT_PRODUCT_IN_CART: (state, action)=>{
            const productId = action.payload;
            let total = state.totalAmount;
            const updatedProducts = state.products.map(item => {
              if (item.product._id === productId) {
                  total = state.totalAmount + item.product.prix;
                  return {
                    ...item,
                    count: item.count + 1,
                  };
              }
              return item;
            });
        
            return {
              ...state,
              products: updatedProducts,
              totalAmount: total,
            };
        },
        DECREMENT_PRODUCT_IN_CART: (state, action)=>{
            const productId = action.payload;
            let total = state.totalAmount;
            const updatedProducts = state.products.map(item => {
            if (item.product._id === productId) {
                  total = state.totalAmount - item.product.prix;
                  return {
                    ...item,
                    count: item.count - 1,
                  };
              }
              return item;
            });

            return {
              ...state,
              products: updatedProducts,
              totalAmount: total,
            };
        },
        RESTART_ALL: ()=>{
          return {
            isLoading: false,
            error: '',
            products: [],
            totalAmount: 0
          }
        },
        SET_PRODUCT_IN_CART: (state, action)=>{
          //payload: productId, count
          const productId = action.payload.productId;
          let total = state.totalAmount;
          const updatedProducts = state.products.map(item => {
            if (item.product._id === productId) {
                total = state.totalAmount - (item.product.prix*item.count) + (item.product.prix*action.payload.count);
                return {
                  ...item,
                  count: action.payload.count,
                };
            }
            return item;
          });
      
          return {
            ...state,
            products: updatedProducts,
            totalAmount: total,
          };
      },
    },
    extraReducers: (builder)=>{
        builder.addCase(findCart.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(findCart.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload.products;
            state._id = action.payload._id
            state.totalAmount = action.payload.totalAmount;
        });
        builder.addCase(findCart.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCT_IN_CART, DECREMENT_PRODUCT_IN_CART, RESTART_ALL, SET_PRODUCT_IN_CART } = cartSlice.actions;
export default cartSlice.reducer;