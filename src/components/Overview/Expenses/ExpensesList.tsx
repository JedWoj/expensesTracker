import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';

const ExpensesList = () => {
    const location = useLocation();
    console.log(location.pathname);
    const transactionsList = useAppSelector((state) => location.pathname === '/overview' ? state.transactions.allTransactions : state.transactions.activeTransactions);
    
    return(    
        <ul className={classes['expenses-list']}>
            {transactionsList.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;