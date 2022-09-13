import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import { Transaction } from '../types/transaction-type';

const initialTransactions = [{type: 'food', value: 45, category: '+', date:'today'},{type: 'shopping', value: 24, category: '-', date:'today'},{type: 'food', value: 45, category: '-', date:'today'},{type: 'food', value: 45, category: '+', date:'yestarday'},{type: 'food', value: 45, category: '-', date:'2 days ago'}];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialTransactions,
    reducers: {
        addTransaction(state,action: PayloadAction<Transaction>) {
            state.push(action.payload)
        },
        logTransaction(state) {
            console.log(current(state))
        },
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;