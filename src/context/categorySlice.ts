import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Category{
    id: number,
    name: string
}

export const fetchCategory = createAsyncThunk<Category[]>(
    'category/fetchCatagory',
    async function () {
        const response = await fetch("http://31.128.39.49:3001/api/category/getAllCategory")
        const data = await response.json()
        return data
    }
)

interface InitialState {
    items: Category[],
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | undefined;
}

const initialState: InitialState = {
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