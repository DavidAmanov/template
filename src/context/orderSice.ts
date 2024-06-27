import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "./store"; 
import {OrderFetch} from '../types/types' 

const initialState: OrderFetch = {
    userId: "",
    orderData: {
        status: ""
    },
    orderItems: [],
    paymentData: {
        method: "",
        status: "paid",
        amount: 0
    },
    addressData: {
        street: "Somewhere",
        city: "Tokyo",
        state: "Tokyo",
        zipCode:"285000",
        country: "Japan"
    },
    recipientData: {
        name: "",
        lastName: "",
        mobilePhone: "",
        email: "",
        comment: ""
    },
    deliveryMethod: "PickUp",
    orderId: 0
}

export const postOrder = createAsyncThunk(
    'order/fetchOrderProducts',
    async(_, thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const response = await fetch('http://31.128.39.49:3001/api/orders/create', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ order: state.order })
        })
        console.log(response, "res")
        const order =  await response.json()
        thunkAPI.dispatch(setOrderId(order.id))
        return order
    }
    
) 

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setUserId(state, action){
            state.userId = action.payload
        },
        setOrderData(state, action){
            state.orderData = action.payload
        },
        setDeliveryMethod(state, action){
            state.deliveryMethod = action.payload
        },
        setPaymentMethod(state, action){
            state.paymentData.method= action.payload
        },
        resetPaymentMethod(state){
            state.paymentData.method = initialState.paymentData.method
        },
        setAddress(state, action){
            state.addressData = action.payload
        },
        resetAddress(state) {
            state.addressData = initialState.addressData;
        },
        setRecipient(state, action){
            state.recipientData = action.payload
        },
        resetRecipient(state){
            state.recipientData = initialState.recipientData
        },
        setOrderProducts(state, action){
            state.orderItems = action.payload
        },
        setTotalAmount(state, action){
            state.paymentData.amount = action.payload
        },
        setOrderId(state, action){
            state.orderId = action.payload
        }
    }
})

export const {
    setUserId,
    setOrderData,
    setAddress, 
    setOrderProducts, 
    setDeliveryMethod, 
    setPaymentMethod, 
    setRecipient, 
    setTotalAmount, 
    resetAddress, 
    resetRecipient,
    resetPaymentMethod,
    setOrderId
}  = orderSlice.actions
export default orderSlice.reducer