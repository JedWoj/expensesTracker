import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import { Transaction } from '../types/transaction-type';

const initialTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];

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