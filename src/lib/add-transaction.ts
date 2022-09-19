import { Transaction } from "../types/transaction-type";

export const addTransaction = async (transaction: Transaction, id: string) => {
    const response = await fetch(`https://expensetracker-2f166-default-rtdb.europe-west1.firebasedatabase.app/:expenseTracker/${id}.json`, {
            method: 'POST',
            body: JSON.stringify([transaction]),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });
    const data = await response.json();
    return data;
}