import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchTransactions } from './async/fetch-transactions';
import { Transaction } from '../types/transaction-type';

// [{category: 'food', value: 45, type: '+', date:'2021-12-12'},{category: 'shopping', value: 24, type: '-', date:'2021-12-12'},{category: 'food', value: 45, type: '-', date:'2021-10-12'},{category: 'food', value: 45, type: '+', date:'2021-09-12'},{category: 'food', value: 45, type: '-', date:'2021-01-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-02-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-04-12'},{category: 'food', value: 45, type: '-', date:'2020-04-11'},{category: 'food', value: 45, type: '-', date:'2020-07-29'},{category: 'food', value: 45, type: '+', date:'2022-12-12'},{category: 'food', value: 45, type: '+', date:'2022-02-12'},{category: 'food', value: 45, type: '+', date:'2022-05-12'},{category: 'food', value: 45, type: '+', date:'2020-05-12'},{category: 'food', value: 85, type: '+', date:'2020-06-12'}]

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