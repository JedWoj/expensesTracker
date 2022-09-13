import React from 'react';
import { transactionsActions } from '../../../store/transactionsSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import classes from './Switch.module.scss';

const Switch = () => {
    const dispatch = useAppDispatch();
    const activeTransactionType = useAppSelector((state) => state.transactions.activeTransactionType);

    const handleTransactionsFiltering = (type: string) => {
        dispatch(transactionsActions.setActiveTransactions(type));
    } 

    return(      
        <section className={classes.switch}>     
                <div onClick={handleTransactionsFiltering.bind(null, '+')} className={activeTransactionType === '+' ? `${classes.switch__btn} ${classes['switch__btn--active']}` : `${classes.switch__btn}`}>
                    <p>
                        Incomes
                    </p>
                </div>
                <div onClick={handleTransactionsFiltering.bind(null, '-')} className={activeTransactionType === '-' ? `${classes.switch__btn} ${classes['switch__btn--active']}` : `${classes.switch__btn}`}>
                    <p>
                        Expenses
                    </p>
                </div>
        </section>
    )
}

export default Switch;