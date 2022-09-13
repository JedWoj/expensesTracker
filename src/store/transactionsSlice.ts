import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import { immutableTransaction } from '../types/transaction-type';

const allTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];

const expensesTransactions = [{category: 'shopping', value: 24, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'today'},{category: 'food', value: 45, type: '-', date:'2 days ago', note: 'Rent for apartment'}];

const incomeTransactions = [{category: 'food', value: 45, type: '+', date:'today'},{category: 'food', value: 45, type: '+', date:'yestarday'}];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {allTransactions, expensesTransactions, incomeTransactions, activeTransactions: incomeTransactions},
    reducers: {
        addTransaction(state,action: PayloadAction<immutableTransaction>) {
            state.allTransactions.push(action.payload);
            action.payload.type === '+' ? state.incomeTransactions.push(action.payload) : state.expensesTransactions.push(action.payload);
        },
        setActiveTransactions(state, action: PayloadAction<string>) {
            const {payload} = action;
            payload === '+' ? state.activeTransactions = incomeTransactions : state.activeTransactions = expensesTransactions; 
            console.log(state.activeTransactions);
        },
        logTransaction(state) {
            console.log(current(state))
        },
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;