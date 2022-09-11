import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import classes from './AddExpenseOverlay.module.scss';
import { Link } from 'react-router-dom';

const AddExpenseOverlay = () => {
    return(
        <>
            <section className={classes['add-expense']}>
                <h1 className={classes['add-expense__heading']}>
                    Add Transactions
                </h1>
                <AddExpenseForm />
            </section>
            <Link to={'/overview'}>
                <div className={classes['add-expense__exit']}>
                    X
                </div>
            </Link>      
        </>
    )
}

export default AddExpenseOverlay;