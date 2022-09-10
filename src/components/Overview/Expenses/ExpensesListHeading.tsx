import React from 'react';
import classes from './ExpensesListHeading.module.scss';

const ExpensesListHeading = () => {
    return(
            <header className={classes.expenses}>
                <h3 className={classes.expenses__heading}>
                    Transactions
                </h3>
                <p className={classes.expenses__mode}>
                    View All
                </p>
            </header>
    )
}

export default ExpensesListHeading;