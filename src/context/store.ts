import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './catalogSlice'
import categoryReducer from './categorySlice'
const store = configureStore({
    reducer:{
        catalog: catalogReducer,
        category: categoryReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store