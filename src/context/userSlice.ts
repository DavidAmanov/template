import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";
import { RootState } from "./store";
import {User} from '../types/types'

const initialState: User = {
    accessToken: "",
    refreshToken: "",
    user: {
        userId: "",
        username: "",
        email: "",
        photo: "",
        role: "USER"
    },
    cart_id: 0,
    favourite_id: 0
} 

interface UserPayload {
    googleId: string,
    username: string,
    email: string,
    photo: string,
    role: "ADMIN" | "USER",
    cartId: number,
    favouriteId: number
}


export const fetchUserData = createAsyncThunk<UserPayload>(
    'user/fetchUserData',
    async (_, thankAPI) => {
        try {
            const state = thankAPI.getState() as RootState
            const token = state.user.accessToken
            const response = await fetch('http://31.128.39.49/api/user/getUser', {
                method: 'GET',
                credentials: 'include',
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            return data;
        } catch (error: any) {
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
                userId: action.payload.googleId,
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