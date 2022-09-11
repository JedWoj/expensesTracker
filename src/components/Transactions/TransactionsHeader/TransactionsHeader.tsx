import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCalendar } from '@fortawesome/free-regular-svg-icons';
import classes from './TransactionsHeader.module.scss';

import { transactionsActions } from '../../../store/transactionsSlice';
import {useDispatch, useSelector} from 'react-redux';

const TransactionsHeader = () => {
    const dispatch = useDispatch();

    dispatch(transactionsActions.addTransaction('test'))
    dispatch(transactionsActions.logTransaction())

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