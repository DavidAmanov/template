import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import { CatalogState } from "../types/types";
//31.128.39.49
export const fetchCatalog = createAsyncThunk<Product[]>(
    'catalog/fetchCatalog',
    async function(){
        const response = await fetch('http://merchserver.org/api/product') 
        const data = await response.json()
        return data;
    }
)

const initialState: CatalogState = {
    items: [],
    status: 'idle',
    error: ''
} 

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCatalog.pending, (state) => {
          state.status = 'pending';
        })
        .addCase(fetchCatalog.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchCatalog.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
})

export default catalogSlice.reducer