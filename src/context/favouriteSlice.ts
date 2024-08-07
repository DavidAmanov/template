import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CartProductType } from "../types/types";
import { Favourites } from "../types/types";

const initialState: Favourites = {
    favouriteProduct: []
}

export const fetchFavouriteProducts = createAsyncThunk<CartProductType[]>(
    'favourite/fetchProduct',
    async(_,thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const favouriteId = state.user.favourite_id
        const response = await fetch(`http://merchserver.org/api/favouriteProduct/${favouriteId}`,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        const data = await response.json()
        return data;
    }
)

export const addProductToFavourite = createAsyncThunk(
    'favourite/addProduct',
    async({productId}:{productId: number},thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const favouriteId = state.user.favourite_id
        const response = await fetch('http://merchserver.org/api/favouriteProduct/add', {
            method: 'POST',
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "favourites_id": favouriteId,
                "product_id": productId,
            })
        })
        const data = await response.json()
        thunkAPI.dispatch(fetchFavouriteProducts())
        return data
    }
)

export const removeProductFromFavourite = createAsyncThunk(
    'favourite/removeProduct',
    async({productId}:{productId: number},thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const token = state.user.accessToken
        const favouriteId = state.user.favourite_id
        const response = await fetch('http://merchserver.org/api/favouriteProduct/remove', {
            method: 'DELETE',
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "favourites_id": favouriteId,
                "product_id": productId,
            })
        })
        const data = await response.json()
        thunkAPI.dispatch(fetchFavouriteProducts())
        return data
    }
)

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers:{
        refreshFavouritesState(state){
            return initialState
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchFavouriteProducts.fulfilled, (state, action)=>{
            state.favouriteProduct = action.payload
        })
    }
})

export const {refreshFavouritesState} = favouriteSlice.actions
export default favouriteSlice.reducer