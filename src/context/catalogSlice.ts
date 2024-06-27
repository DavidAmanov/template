import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    status: string;
    description: string;
    categoryId: number;
    img: string;
  }
//31.128.39.49
export const fetchCatalog = createAsyncThunk<Product[]>(
    'catalog/fetchCatalog',
    async function(){
        const response = await fetch('http://31.128.39.49:3001/api/product') 
        const data = await response.json()
        return data;
    }
)

interface catalogState {
    items: Product[]
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
}

const initialState: catalogState = {
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