import {createSlice} from '@reduxjs/toolkit';

const initialTransactions = [];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialTransactions,
    reducers: {
        addTransaction(state,action) {
            state.push(action.payload)
        },
        logTransaction(state) {
            console.log([...state])
        }
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;