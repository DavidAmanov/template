import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/types";


const initialState: Product = {
    id: 0,
    name: '',
    price: 0,
    status: '',
    description: '',
    categoryId: 0,
    img: '',
}

export const fetchProductById = createAsyncThunk<Product, {id:string}>(
    'product/fetchProduct',
    async ({id})=>{
        const response = await fetch(`http://merchserver.org/api/product/${id}`)
        const data:Product = await response.json()
        return data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductById.fulfilled, (state, action)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.status = action.payload.status;
            state.description = action.payload.description;
            state.categoryId = action.payload.categoryId;
            state.img = action.payload.img
        })
    }
})
 
export default productSlice.reducer