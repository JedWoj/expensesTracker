import {Transaction, immutableTransaction} from '../../../types/transaction-type';

export const filterTransactionsByDate = (arr: (Transaction | immutableTransaction)[],activeYear: string) => [...arr].filter(tr => new Date(tr.date).getFullYear() === +activeYear);

export const sortTransactions = (arr: (Transaction | immutableTransaction)[]) => [...arr].sort((a,b) => {
    const c = new Date(a.date).getTime();
    const d = new Date(b.date).getTime();
    return d - c 
});