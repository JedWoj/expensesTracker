import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import { Transaction } from '../types/transaction-type';

const allTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];
const expensesTransaction = [];
const incomeTransactions = [];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {allTransactions, expensesTransaction, incomeTransactions},
    reducers: {
        addTransaction(state,action: PayloadAction<Transaction>) {
            state.allTransactions.push(action.payload);
        },
        logTransaction(state) {
            console.log(current(state))
        },
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;