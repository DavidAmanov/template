import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "./store";
import { CartProductType } from "../types/types";



export interface Cart {
    cartProducts: CartProductType[],
    totalAmount: number,
    productId: number
}


const initialState: Cart = {
    cartProducts: [],
    totalAmount: 0,
    productId: 0
}

export const fetchProductsInCart = createAsyncThunk<CartProductType[]>(
    'cart/fetchProducts',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const cartId = state.user.cart_id
        const response = await fetch(`http://localhost:3001/api/cartProduct/${cartId}`,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        const data: CartProductType[] = await response.json()
        return data
    }
) 

export const counterAmount = createAsyncThunk<number>(
    'cart/counterAmount',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        let amount: number = 0
        state.cart.cartProducts.forEach((cartProduct: CartProductType) => {
            amount += cartProduct.product.price * cartProduct.quantity;
        });
        return amount
    }
)

export const changeProductQuantity = createAsyncThunk(
    'cart/changeProductQuantity',
    async(quantity,thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const cartId = state.user.cart_id
        const productId = state.cart.productId
        const response = await fetch('http://localhost:3001/api/cartProduct/add', {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "cart_id": cartId,
                "product_id": productId,
                "quantity": quantity
            })
        })
        const result = await response.json();
        thunkAPI.dispatch(fetchProductsInCart())
        return result
        
    }
)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsInCart.fulfilled, (state, action)=>{
            state.cartProducts = action.payload
        })
        builder.addCase(counterAmount.fulfilled, (state, action)=>{
            state.totalAmount = action.payload
        })
    }


})


export default cartSlice.reducer;