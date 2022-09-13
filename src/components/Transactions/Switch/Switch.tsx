import React, {useState} from 'react';
import { transactionsActions } from '../../../store/transactionsSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import classes from './Switch.module.scss';

const Switch = () => {
    const [transactionType, setTransactionType] = useState('+');

    const dispatch = useAppDispatch();

    const allTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const expenseTransactions = useAppSelector((state) => state.transactions.expensesTransactions);
    const incomeTransactions = useAppSelector((state) => state.transactions.incomeTransactions);

    const handleTransactionsFiltering = (type: string) => {
        setTransactionType(type);
        console.log(allTransactions);
        console.log(expenseTransactions);
        console.log(incomeTransactions);
        dispatch(transactionsActions.setActiveTransactions(type));
    } 

    return(      
        <section className={classes.switch}>     
                <div onClick={handleTransactionsFiltering.bind(null, '+')} className={transactionType === '+' ? `${classes.switch__btn} ${classes['switch__btn--active']}` : `${classes.switch__btn}`}>
                    <p>
                        Incomes
                    </p>
                </div>
                <div onClick={handleTransactionsFiltering.bind(null, '-')} className={transactionType === '-' ? `${classes.switch__btn} ${classes['switch__btn--active']}` : `${classes.switch__btn}`}>
                    <p>
                        Expenses
                    </p>
                </div>
        </section>
    )
}

export default Switch;