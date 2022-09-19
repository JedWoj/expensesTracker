import React from "react";
import classes from './NoExpenses.module.scss';

const NoExpenses = () => {
    return(
        <p className={classes['no-expenses']}>
            No transactions found! 
        </p>
    )
}

export default NoExpenses;