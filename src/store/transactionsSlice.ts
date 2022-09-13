import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { immutableTransaction } from '../types/transaction-type';

const allTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];

const expensesTransactions = [{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];

const incomeTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'}];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {allTransactions, expensesTransactions, incomeTransactions, activeTransactions: incomeTransactions, activeTransactionType: '+'},
    reducers: {
        addTransaction(state,action: PayloadAction<immutableTransaction>) {
            state.allTransactions.push(action.payload);
            action.payload.type === '+' ? state.incomeTransactions.push(action.payload) : state.expensesTransactions.push(action.payload);
        },
        setActiveTransactions(state, action: PayloadAction<string>) {
            const {payload} = action;
            if (payload === '+') {
                state.activeTransactions = incomeTransactions;
                state.activeTransactionType = '+';
            } else {
                state.activeTransactions = expensesTransactions;
                state.activeTransactionType = '-';
            }
        },
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;