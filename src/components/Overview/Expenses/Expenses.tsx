import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListHeading from "./ExpensesListHeading";
import classes from './Expenses.module.scss';

const Expenses = () => {
    return(
        <div className={classes.expenses}>
            <ExpensesListHeading />
            <ExpensesList />
        </div>
    )
}

export default Expenses;