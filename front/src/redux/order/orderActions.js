import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../constants/axiosConfig";

const findAllOrders = createAsyncThunk('order/fetchAllOrders', async()=>{
    const res = await instance.get('/order');
    return res.data;
});

const findMyOrders = createAsyncThunk('order/fetchMyOrders', async()=>{
    const res = await instance.get('/order/mine');
    return res.data;
})

export {findAllOrders, findMyOrders}