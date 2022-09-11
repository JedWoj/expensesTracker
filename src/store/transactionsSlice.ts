import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import { Transaction } from '../types/transaction-type';

const initialTransactions = [];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialTransactions,
    reducers: {
        addTransaction(state,action: PayloadAction<Transaction>) {
            state.push(action.payload)
        },
        logTransaction(state) {
            console.log(current(state))
        }
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;