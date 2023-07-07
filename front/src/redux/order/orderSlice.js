import { createSlice } from "@reduxjs/toolkit"
import { findAllOrders, findMyOrders } from "./orderActions"

const initialState = {
    isLoading: false,
    error: '',
    orders: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        CHANGE_ORDER_STATUS: (state, action)=>{
            const orderId = action.payload._id;
            const newOrder = action.payload;
            const updatedOrders = state.orders.map(order => {
                if (order._id === orderId) {
                    return {
                      ...newOrder
                    };
                }
                return order;
              });
          
              return {
                ...state,
                orders: updatedOrders,
              };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(findAllOrders.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(findAllOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload;
        });
        builder.addCase(findAllOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });

        builder.addCase(findMyOrders.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(findMyOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload;
        });
        builder.addCase(findMyOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export const {CHANGE_ORDER_STATUS} = orderSlice.actions;
export default orderSlice.reducer;