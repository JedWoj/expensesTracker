import React from 'react';
import { useAppSelector } from '../../../hooks';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';

const ExpensesList = () => {
    const transactionsList = useAppSelector((state) => state.transactions.allTransactions);
    console.log(transactionsList)
    return(    
        <ul className={classes['expenses-list']}>
            {transactionsList.map(exp => <Expense key={Math.random()} category={exp.category} note={exp?.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;