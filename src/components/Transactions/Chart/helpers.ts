import {Transaction,immutableTransaction} from '../../../types/transaction-type';

export const sumTransactionsValues = (arr: Transaction[] | immutableTransaction[]) => {
    return [...arr].reduce((a,b) => {
        return a + b.value;
    },0)
}