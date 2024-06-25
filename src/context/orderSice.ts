import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "./store"; 
import { Product } from "../types/types";


interface OrderProduct {
    id: number,
    quantity: number,
    orderId: number,
    productId: number,
    product: Product
}

export interface Order {
    orderProducts: OrderProduct[]
    totalAmount: number
}

const initialState: Order = {
    orderProducts: [],
    totalAmount: 0
}

// export const postOrder = createAsyncThunk<OrderProduct[]>(
//     'order/fetchOrderProducts',
//     async(_,thunkAPI)=>{}
//     //todo заказ должен принимать массив продуктов адрес средство оплаты и адрес
// ) 

