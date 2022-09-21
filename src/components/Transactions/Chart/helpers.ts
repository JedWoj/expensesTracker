import {Transaction } from '../../../types/transaction-type';

export const sumTransactionsValues = (arr: Transaction[]) => {
    return [...arr].reduce((a,b) => {
        return a + b.value;
    },0)
}