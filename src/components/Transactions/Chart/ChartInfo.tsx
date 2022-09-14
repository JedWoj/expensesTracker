import React from 'react';
import { useAppSelector } from '../../../hooks';
import classes from './ChartInfo.module.scss';

const ChartInfo = () => {
    const activeYear = useAppSelector((state) => state.transactions.activeYear);

    return(
        <div className={classes['chart-heading']}>
            <p className={classes['chart-heading__date']}>
                {`01 Jan ${activeYear} - 31 Dec ${activeYear}`}
            </p>
            <h2 className={classes['chart-heading__amount']}>
                $3500.00
            </h2>
        </div>
    )
}

export default ChartInfo;