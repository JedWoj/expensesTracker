import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk('user/fetchExpenses', async (id: string) => {
    const response = await fetch(`https://expensetracker-2f166-default-rtdb.europe-west1.firebasedatabase.app/:expenseTracker/${id}.json`);
    const expenses = await response.json();
    console.log(expenses);
    return expenses;
});