import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../types/types";
import { CategoryState } from "../types/types";

export const fetchCategory = createAsyncThunk<Category[]>(
    'category/fetchCatagory',
    async function () {
        const response = await fetch("http://merchserver.org/api/category/getAllCategory")
        const data = await response.json()
        return data
    }
)

const initialState: CategoryState = {
    items: [],
    status: "idle",
    error: ''
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategory.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchCategory.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export default categorySlice.reducer