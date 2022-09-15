import {configureStore} from "@reduxjs/toolkit";
import transactionsSlice from "./transactionsSlice"; 
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsSlice.reducer,
        user: userSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch