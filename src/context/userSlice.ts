import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";

interface User {
    token: string,
    user: {
        username: string,
        email: string,
        photo: string,
        role: "ADMIN" | "USER"
    },
    cart_id: number,
    favourite_id: number,
}

const initialState: User = {
    token: "",
    user: {
        username: "",
        email: "",
        photo: "",
        role: "USER"
    },
    cart_id: 0,
    favourite_id: 0
} 

interface UserPayload {
    username: string,
    email: string,
    photo: string,
    role: "ADMIN" | "USER",
    cartId: number,
    favouriteId: number
}

export const fetchUserData = createAsyncThunk<UserPayload>(
    'user/fetchUserData',
    async (_, {getState})=>{
        const state = getState() as {user: User}
        const response = await fetch('http://localhost:3001/api/user/get',{
            method: "GET",
            credentials: "include"
        })
        const data = await response.json()
        return data;
    }
)



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken(state, action){
            state.token = action.payload.token
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action)=>{
            state.user = {
                username: action.payload.username,
                email: action.payload.email,
                photo: action.payload.photo,
                role: action.payload.role
            };
            state.cart_id = action.payload.cartId;
            state.favourite_id = action.payload.favouriteId
        })
    }

})

export const { setToken } = userSlice.actions;
export default userSlice.reducer;

export const tokenTransform = createTransform(
    (inboundState: User) => ({
        token: inboundState.token
    }),
    (outboundState: { token: string }) => ({
        ...initialState,
        token: outboundState.token
    }),
    { whitelist: ['user'] }
);