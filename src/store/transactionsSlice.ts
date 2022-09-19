import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchTransactions } from './async/fetch-transactions';
import { Transaction } from '../types/transaction-type';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
    allTransactions: {name: []} as {name: Transaction[]},
    activeTransactionType: '+',
    activeYear: '2022',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.allTransactions = {name: []};
        })
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.allTransactions = action.payload;
        })
        builder.addCase(fetchTransactions.rejected, (state) => {
            state.allTransactions = {name: []};
        })
    },
    reducers: {
        setActiveTransactions(state, action: PayloadAction<string>) {
            action.payload === '+' ? state.activeTransactionType = '+' : state.activeTransactionType = '-';
        },
        setActiveYear(state, action: PayloadAction<string>) {
            state.activeYear = action.payload;
        },
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;