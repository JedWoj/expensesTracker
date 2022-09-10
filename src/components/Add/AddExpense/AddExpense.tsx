import React from 'react';
import classes from './AddExpense.module.scss';
import { Link } from 'react-router-dom';

const AddExpense = () => {
    return(
        <>
            <section className={classes['add-expense']}>
                <h1 className={classes['add-expense__heading']}>
                    Add Transactions
                </h1>
                <form className={classes['add-expense__form']}>
                    <div className={classes['add-expense__bgc']}>
                        <input type="number" placeholder="0" min="0.01" max="9999999" className={classes['add-expense__amount']} />
                    </div>
                    <input type='text' placeholder='Category' className={classes['add-expense__category']}/>   
                    <textarea placeholder='Note' className={classes['add-expense__note']}></textarea>
                    <input type='date' className={classes['add-expense__date']} />
                    <button className={classes['add-expense__btn']}>Save</button>
                </form>
            </section>
            <Link to={'/overview'}>
                <div className={classes['add-expense__exit']}>
                    X
                </div>
            </Link>      
        </>
    )
}

export default AddExpense;