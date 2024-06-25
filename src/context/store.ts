import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import catalogReducer from './catalogSlice';
import categoryReducer from './categorySlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice'
import favouriteReducer from './favouriteSlice'
import orderReducer from './orderSice'

const rootReducer = combineReducers({
    catalog: catalogReducer,
    category: categoryReducer,
    user: userReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    order: orderReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


