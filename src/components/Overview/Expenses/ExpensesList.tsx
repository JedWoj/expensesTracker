import React from 'react';
import Expense from './Expense';

const DUMMY_EXPENES = [{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'shopping', amount:'24', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'}]


const ExpensesList = () => {
    return(    
        <ul>
            {DUMMY_EXPENES.map(exp => <Expense key={Math.random()} type={exp.type} amount={exp.amount} kind={exp.kind} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;