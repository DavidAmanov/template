import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from './store'

interface Order {
    status: string
    id: number
    createdAt: any
    updatedAt: any
    userId: string
}

const initialState: Order[] = []

export const fetchOrderList = createAsyncThunk(
    'orderList/fetchOrderList',
    async(_, thunkAPI)=>{
        const state = thunkAPI.getState() as RootState
        const userId = state.user.user.userId
        const response = await fetch(`http://31.128.39.49:80/api/orders/getOrders/${userId}`)
        const data = await response.json()
        return data
    }
)


const orderListSlice = createSlice({
    name: "orderList",
    initialState,
    reducers:{
        refreshOrderList(state){
            return initialState
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchOrderList.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export const {
    refreshOrderList
} = orderListSlice.actions
export default orderListSlice.reducer