import React from 'react';
import classes from './Switch.module.scss';

const Switch = () => {
    return(      
        <section className={classes.switch}>     
                <div className={`${classes.switch__btn}`}>
                    <p>
                        Incomes
                    </p>
                </div>
                <div className={`${classes.switch__btn} ${classes['switch__btn--active']}`}>
                    <p>
                        Expenses
                    </p>
                </div>
        </section>
    )
}

export default Switch;