import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ExpensesListHeading.module.scss';

const ExpensesListHeading = () => {
    return(
            <header className={classes.expenses}>
                <h3 className={classes.expenses__heading}>
                    Transactions
                </h3>
                <Link className={classes.expenses__link} to="/transactions">
                    <p className={classes.expenses__mode}>
                        View All
                    </p>
                </Link>
            </header>
    )
}

export default ExpensesListHeading;