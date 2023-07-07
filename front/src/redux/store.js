import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import orderReducer from "./order/orderSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

export default store;
