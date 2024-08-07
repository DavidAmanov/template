import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CartProductType } from "../types/types";
import { Cart } from "../types/types";

const initialState: Cart = {
  cartProducts: [],
  totalAmount: 0,
  productId: 0,
};

export const fetchProductsInCart = createAsyncThunk<CartProductType[]>(
  "cart/fetchProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.accessToken;
    const cartId = state.user.cart_id;
    const response = await fetch(
      `http://merchserver.org/api/cartProduct/${cartId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const counterAmount = createAsyncThunk<number>(
  "cart/counterAmount",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    let amount: number = 0;
    state.cart.cartProducts.forEach((cartProduct: CartProductType) => {
      amount += cartProduct.product.price * cartProduct.quantity;
    });
    return amount;
  }
);

export const changeProductQuantity = createAsyncThunk(
  "cart/changeProductQuantity",
  async (
    { quantity, productId }: { quantity: number; productId: number },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.accessToken;
    const cartId = state.user.cart_id;
    const response = await fetch("http://merchserver.org/api/cartProduct/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: cartId,
        product_id: productId,
        quantity: quantity,
      }),
    });
    const result = await response.json();
    thunkAPI.dispatch(fetchProductsInCart());
    return result;
  }
);

export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async (
    { quantity, productId }: { quantity: number; productId: number },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.accessToken;
    const cartId = state.user.cart_id;
    const response = await fetch(
      "http://merchserver.org/api/cartProduct/remove",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart_id: cartId,
          product_id: productId,
          quantity: quantity,
        }),
      }
    );
    const result = await response.json();
    thunkAPI.dispatch(fetchProductsInCart());
    return result;
  }
);

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (
    { quantity, productId }: { quantity: number; productId: number },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.accessToken;
    const cartId = state.user.cart_id;
    const response = await fetch("http://merchserver.org/api/cartProduct/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: cartId,
        product_id: productId,
        quantity: quantity,
      }),
    });
    thunkAPI.dispatch(fetchProductsInCart());
    console.log(response);
    return await response.json();
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductId(state, action) {
      state.productId = action.payload;
    },
    refreshCartState(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsInCart.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.cartProducts = action.payload.sort((a, b) => a.id - b.id);
      } else {
        console.error(
          "fetchProductsInCart fulfilled payload is not an array:",
          action.payload
        );
      }
    });
    builder.addCase(counterAmount.fulfilled, (state, action) => {
      state.totalAmount = action.payload;
    });
  },
});

export const { setProductId, refreshCartState } = cartSlice.actions;
export default cartSlice.reducer;
