import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";
import { RootState } from "./store";

interface User {
    accessToken: string,
    refreshToken: string,
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
    accessToken: "",
    refreshToken: "",
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
    async (_, { getState }) => {
        const state = getState() as RootState; 
        const token = state.user.accessToken; 
        console.log(state.user)
        try {
            const response = await fetch('http://localhost:3001/api/user/getUser', {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            console.log('Received user data:', data);
            return data;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken(state, action){
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
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

export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectCartId = (state: RootState) => state.user.cart_id;
export const { setToken } = userSlice.actions;
export default userSlice.reducer;

export const tokenTransform = createTransform(
    (inboundState: User) => ({
        token: inboundState.accessToken
    }),
    (outboundState: { token: string }) => ({
        ...initialState,
        token: outboundState.token
    }),
    { whitelist: ['user'] }
);