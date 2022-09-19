import { Transaction } from "../types/transaction-type"

export const filterTransactions = (transactions: Transaction[],type: string) => {
    const filtered = transactions.filter(tr => tr.type === type);
    return filtered;
}