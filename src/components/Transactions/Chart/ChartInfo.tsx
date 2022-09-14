import React from 'react';
import { useAppSelector } from '../../../hooks';
import { sumTransactionsValues } from './helpers';
import { filterTransactions } from '../../Overview/Expenses/helpers';
import classes from './ChartInfo.module.scss';

const ChartInfo = () => {
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    const activeType = useAppSelector((state) => state.transactions.activeTransactionType);
    const activeTransactions = useAppSelector((state) => state.transactions.activeTransactions);

    const filtered = filterTransactions(activeTransactions, activeYear);

    return(
        <div className={classes['chart-heading']}>
            <p className={classes['chart-heading__date']}>
                {`01 Jan ${activeYear} - 31 Dec ${activeYear}`}
            </p>
            <h2 className={classes['chart-heading__amount']}>
                {`${activeType}${sumTransactionsValues(filtered)}$`}
            </h2>
        </div>
    )
}

export default ChartInfo;