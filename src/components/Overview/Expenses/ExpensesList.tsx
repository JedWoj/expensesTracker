import React from 'react';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';

const DUMMY_EXPENES = [{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'shopping', amount:'24', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'}]


const ExpensesList = () => {
    return(    
        <ul className={classes['expenses-list']}>
            {DUMMY_EXPENES.map(exp => <Expense key={Math.random()} type={exp.type} amount={exp.amount} kind={exp.kind} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;