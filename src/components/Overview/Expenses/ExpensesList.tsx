import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { filteredTransactions,sortTransactions } from './helpers';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';

const ExpensesList = () => {
    const location = useLocation();
    const transactionsList = useAppSelector((state) => location.pathname === '/overview' ? state.transactions.allTransactions : state.transactions.activeTransactions);
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    let shownTransactions = [];
    const filtered = filteredTransactions(transactionsList,activeYear);
    const sorted = sortTransactions(filtered);

    location.pathname === '/overview' ? shownTransactions = sortTransactions(transactionsList) : shownTransactions = sorted;

    return(    
        <ul className={location.pathname !== '/transactions' ? classes['expenses-list'] : undefined}>
            {shownTransactions.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;