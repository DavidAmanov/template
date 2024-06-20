import { createSlice } from "@reduxjs/toolkit";

interface User {
    token: string,
    user: {
        username: string,
        email: string,
        photo: string,
        role: "ADMIN" | "USER"
    },
    cart_id: number,
    favourite_id: number
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

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        identificate(state, action) {
            state.token = action.payload.token;
            state.user = {
                username: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo,
                role: action.payload.role
            };
            state.cart_id = action.payload.cartId;
            state.favourite_id = action.payload.favouriteId
        }
    }
})

export const { identificate } = userSlice.actions;
export default userSlice.reducer;
