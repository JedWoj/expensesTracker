import {configureStore} from "@reduxjs/toolkit";
import transactionsSlice from "./transactionsSlice"; 

const store = configureStore({
    reducer: {
        transactions: transactionsSlice.reducer,
    }
});

export default store;