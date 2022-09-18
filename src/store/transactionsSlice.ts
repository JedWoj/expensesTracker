import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { immutableTransaction } from '../types/transaction-type';
import { fetchTransactions } from './async/fetch-transactions';
import { Transaction } from '../types/transaction-type';

// [{category: 'food', value: 45, type: '+', date:'2021-12-12'},{category: 'shopping', value: 24, type: '-', date:'2021-12-12'},{category: 'food', value: 45, type: '-', date:'2021-10-12'},{category: 'food', value: 45, type: '+', date:'2021-09-12'},{category: 'food', value: 45, type: '-', date:'2021-01-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-02-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-04-12'},{category: 'food', value: 45, type: '-', date:'2020-04-11'},{category: 'food', value: 45, type: '-', date:'2020-07-29'},{category: 'food', value: 45, type: '+', date:'2022-12-12'},{category: 'food', value: 45, type: '+', date:'2022-02-12'},{category: 'food', value: 45, type: '+', date:'2022-05-12'},{category: 'food', value: 45, type: '+', date:'2020-05-12'},{category: 'food', value: 85, type: '+', date:'2020-06-12'}]

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
    allTransactions: {name: []} as {name: Transaction[]},
    expensesTransactions: [],
    incomeTransactions: [],
    activeTransactions: [],
    activeTransactionType: '+',
    activeYear: '2022',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.allTransactions = {name: []};
        })
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            console.log(action.payload)
            state.allTransactions = action.payload;
        })
        builder.addCase(fetchTransactions.rejected, (state) => {
            state.allTransactions = {name: []};
        })
    },
    reducers: {
        addTransaction(state, action: PayloadAction<immutableTransaction>) {
            state.allTransactions.name.push(action.payload);
            action.payload.type === '+' ? state.incomeTransactions.push(action.payload) : state.expensesTransactions.push(Object.keys(action.payload)[0]);
        },
        setActiveTransactions(state, action: PayloadAction<string>) {
            if (action.payload === '+') {
                state.activeTransactions = state.incomeTransactions;
                state.activeTransactionType = '+';
            } else {
                state.activeTransactions = state.expensesTransactions;
                state.activeTransactionType = '-';
            }
        },
        setActiveYear(state, action: PayloadAction<string>) {
            state.activeYear = action.payload;
        },
        sortTransactions(state) {
            // state.incomeTransactions = state.allTransactions.name.filter(tr.type !== '-');
            // state.expensesTransactions = state.allTransactions.name.filter(tr.type !== '+');            
        }
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;