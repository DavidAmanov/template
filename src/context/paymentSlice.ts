import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Payment{
    id: number
    name: string
}

const initialState: Payment[] = []

export const fetchPaymentMethods = createAsyncThunk(
    'payment/fetchPaymentMethods',
    async ()=>{
        const response = await fetch('http://merchserver.org/api/paymentMethod/getAll')
        const data = await response.json()
        return data
    }
)

const paymentMethodSlice = createSlice({
    name: 'payment',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPaymentMethods.fulfilled, (state, action)=>{
            return action.payload
        })
    },

})

export default paymentMethodSlice.reducer