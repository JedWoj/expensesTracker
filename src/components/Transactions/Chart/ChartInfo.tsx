import React from 'react';
import { useAppSelector } from '../../../hooks';
import { prepareData } from '../../../util/prepare-data';
import { sumTransactionsValues } from './helpers';
import { filterTransactions } from '../../../util/filter-transactions';
import { filterTransactionsByDate } from '../../Overview/Expenses/helpers';
import classes from './ChartInfo.module.scss';

const ChartInfo = () => {
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    const activeType = useAppSelector((state) => state.transactions.activeTransactionType);
    const fetchedTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const transformedTransactions = prepareData(fetchedTransactions);
    const activeTransactions = filterTransactions(transformedTransactions, activeType);
    const filteredTransactionsByYear = filterTransactionsByDate(activeTransactions,activeYear);

    return(
        <div className={classes['chart-heading']}>
            <p className={classes['chart-heading__date']}>
                {`01 Jan ${activeYear} - 31 Dec ${activeYear}`}
            </p>
            <h2 className={classes['chart-heading__amount']}>
                {`${activeType}${sumTransactionsValues(filteredTransactionsByYear)}$`}
            </h2>
        </div>
    )
}

export default ChartInfo;