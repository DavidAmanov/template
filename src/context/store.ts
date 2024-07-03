import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import catalogReducer from './catalogSlice';
import categoryReducer from './categorySlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice'
import favouriteReducer from './favouriteSlice'
import orderReducer from './orderSice'
import productReducer from './productSlice'
import paymentMethodsReducer from './paymentSlice'
import orderListReducer from './orderListSlice'

const rootReducer = combineReducers({
    catalog: catalogReducer,
    category: categoryReducer,
    user: userReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    order: orderReducer,
    orderList: orderListReducer,
    product: productReducer,
    payment: paymentMethodsReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart', 'favourite', 'order'] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


