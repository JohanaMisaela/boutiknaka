import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../constants/axiosConfig";

const findCart = createAsyncThunk('cart/findCart', async()=>{
    const res = await instance.get('/cart');
    return res.data;
})

// const addToCart = createAsyncThunk('cart/addToCart', async(product)=>{
//     const productId = product._id;
//     await instance.patch(`/cart/add`, {productId});
//     return product;
// })

export {findCart}