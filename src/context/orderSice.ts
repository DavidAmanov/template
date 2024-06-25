import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "./store"; 
import { Product } from "../types/types";

interface Address {
    street:string,
    city:string,
    state:string,
    zipCode:string,
    country:string
}

interface Recipient {
    name: string,
    lastName: string,
    mobilePhone: string,
    email: string,
    comment: string
}

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
    deliveryMethod: string
    paymentMethod: string
    address: Address
    recipient: Recipient
}

const initialState: Order = {
    orderProducts: [],
    totalAmount: 0,
    deliveryMethod: "Courier",
    paymentMethod: "Credit Card",
    address: {
        street:"",
        city:"",
        state:"",
        zipCode:"",
        country:""
    },
    recipient: {
        name: "",
        lastName: "",
        mobilePhone: "",
        email: "",
        comment: ""
    }

}

// export const postOrder = createAsyncThunk<OrderProduct[]>(
//     'order/fetchOrderProducts',
//     async(_,thunkAPI)=>{}
//     //todo заказ должен принимать массив продуктов адрес средство оплаты и адрес
// ) 

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setMethodDelivery(state, action){
            state.deliveryMethod = action.payload
        },
        setPaymentMethod(state, action){
            state.paymentMethod = action.payload
        },
        setAddress(state, action){
            state.address = action.payload
        },
        setRecipient(state, action){
            state.recipient = action.payload
        },
        setOrderProducts(state, action){
            state.orderProducts = action.payload
        },
        setTotalAmount(state, action){
            state.totalAmount = action.payload
        }
    }
})

export const {setAddress, setMethodDelivery, setOrderProducts, setPaymentMethod, setRecipient, setTotalAmount}  = orderSlice.actions
export default orderSlice.reducer