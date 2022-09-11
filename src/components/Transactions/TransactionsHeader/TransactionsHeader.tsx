import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCalendar } from '@fortawesome/free-regular-svg-icons';
import classes from './TransactionsHeader.module.scss';

const TransactionsHeader = () => {
    return(
        <header className={classes['transactions-header']}>
            <Link to="/" className={classes['transactions-header__icon-box']}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className={classes['transactions-header__icon']} />
            </Link>
            <h1 className={classes['transactions-header__heading']}>
                Transactions
            </h1>
            <div className={classes['transactions-header__icon-box']}>
                <FontAwesomeIcon icon={faCalendar} className={classes['transactions-header__icon']} />
            </div>
        </header>
    )
}

export default TransactionsHeader;