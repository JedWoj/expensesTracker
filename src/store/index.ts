import {configureStore} from "@reduxjs/toolkit";
import transactionsSlice from "./transactionsSlice"; 

const store = configureStore({
    reducer: {
        transactions: transactionsSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch