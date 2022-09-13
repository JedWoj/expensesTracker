import React, {useState} from 'react';
import classes from './Switch.module.scss';

const Switch = () => {
    const [transactionType, setTransactionType] = useState('+');

    const handleTransactionsFiltering = (type: string) => {
        setTransactionType(type);
        
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